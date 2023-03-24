import {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} from "../config/settings";
import jwt from "jsonwebtoken";
import {Token} from "../entities";
import {UserDto} from "../dtos/userDto";


class TokenService {
    generateTokens(DTO: UserDto, expires: string): { accessToken: string, refreshToken: string } {
        const accessToken = jwt.sign(DTO, JWT_ACCESS_SECRET, {expiresIn: expires}) // TODO: config
        const refreshToken = jwt.sign(DTO, JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    verifyAccessToken(token: string) {
        try {
            return jwt.verify(
                token,
                JWT_ACCESS_SECRET
            );
        } catch (e) {
            return null;
        }
    }

    verifyRefreshToken(token: string) {
        try {
            return jwt.verify(
                token,
                JWT_REFRESH_SECRET
            );
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId: number, refreshToken: string) {
        const token = await Token.findOne({where: {user_id: userId.toString()}});
        if (token) {
            token.token = refreshToken;
            await token.save();
            return token;
        }

        const newToken = await Token.create({
            user_id: userId,
            token: refreshToken
        });
        await newToken.save();
        return newToken;
    }

    async removeToken(refreshToken: string) {
        const token = await Token.findOne({where: {token: refreshToken}});
        if (token) {
            await token.destroy();
            return true;
        }
        return false;
    }

    async findToken(refreshToken: string) {
        return await Token.findOne({where: {token: refreshToken}});
    }
}

export default new TokenService();