import ApiError from "../exceptions/ApiError";

class ValidationService {
    register(phone: any, password: any) {
        if (!phone)
            throw ApiError.BadRequest('Phone is required', 'phone_is_required');
        if (!password)
            throw ApiError.BadRequest('Password is required', 'password_is_required');
    }

    login(phone: any, password: any) {
        if (!phone)
            throw ApiError.BadRequest('Phone is required', 'phone_is_required');
        if (!password)
            throw ApiError.BadRequest('Password is required', 'password_is_required');
    }

    adminLog(login: any, password: any) {
        if (!login)
            throw ApiError.BadRequest('Login is required', 'login_is_required');
        if (!password)
            throw ApiError.BadRequest('Password is required', 'password_is_required');
    }
}

export default new ValidationService();