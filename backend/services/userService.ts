import {User} from "../entities";
import ApiError from "../exceptions/ApiError";
import {UserDto} from "../dtos/userDto";
import jwtService from "./jwtService";
import {compare, hash} from "bcryptjs";

class UserService {
    async registration(phone: string, password: string, name?: string) {
        const existingUser = await User.findOne({where: {phone}});
        if (existingUser) {
            throw ApiError.BadRequest('User with this phone already exists', 'user_already_exists');
        }
        const hashPassword = await hash(password, 5);
        const user = await User.create({phone, password: hashPassword, name});
        await user.save();
        const userDto = new UserDto(user);
        const tokens = jwtService.generateTokens({...userDto}, '24h');
        await jwtService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user};
    }

    async login(phone: string, password: string) {
        const user = await User.findOne({where: {phone}});
        if (!user) {
            throw ApiError.BadRequest('User with this phone does not exist', 'user_does_not_exist');
        }
        const isPasswordEquals = await compare(password, user.password);
        if (!isPasswordEquals) {
            throw ApiError.BadRequest('Incorrect password', 'incorrect_password');
        }
        const userDto = new UserDto(user);
        const tokens = jwtService.generateTokens({...userDto}, '24h');

        await jwtService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user};
    }

    async logout(refreshToken: string) {
        return await jwtService.removeToken(refreshToken);
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData: any = jwtService.verifyRefreshToken(refreshToken);
        const token = await jwtService.findToken(refreshToken);
        if (!token || !userData) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findOne({where: {id: userData.id}});
        if (!user) {
            throw ApiError.UnauthorizedError();
        }
        const userDto = new UserDto(user);
        const tokens = jwtService.generateTokens({...userDto}, '24h');
        await jwtService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }
}

export default new UserService();