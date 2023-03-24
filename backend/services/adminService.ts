import {Admin, User} from "../entities";
import ApiError from "../exceptions/ApiError";
import {UserDto} from "../dtos/userDto";
import {compare, hash} from "bcryptjs";
import jwtService from "./jwtService";

class AdminService {
    async createAdmin(login: string, password: string) {
        const existingAdmin = await Admin.findOne({where: {login}});
        if (existingAdmin) {
            throw ApiError.BadRequest('Admin with this login already exists', 'admin_already_exists');
        }
        const hashPassword = await hash(password, 5);
        const admin = await Admin.create({login, password: hashPassword});
        await admin.save();
        const userDto = new UserDto(admin);
        const tokens = jwtService.generateTokens({...userDto}, '10m');
        await jwtService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, admin};
    }

    async login(login: string, password: string) {
        const admin = await Admin.findOne({where: {login}});
        if (!admin) {
            throw ApiError.BadRequest('Admin with this login does not exist', 'admin_does_not_exist');
        }
        const isPasswordEquals = await compare(password, admin.password);
        if (!isPasswordEquals) {
            throw ApiError.BadRequest('Incorrect password', 'incorrect_password');
        }
        const userDto = new UserDto(admin);
        const tokens = jwtService.generateTokens({...userDto}, '10m');

        await jwtService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, admin};
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
        const tokens = jwtService.generateTokens({...userDto}, '10m');
        await jwtService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }
}

export default new AdminService();