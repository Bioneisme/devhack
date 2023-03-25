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

    createApplication(user_id: number, title: string, status: string, category: string, price: number) {
        if (!user_id)
            throw ApiError.BadRequest('User id is required', 'user_id_is_required');
        if (!title)
            throw ApiError.BadRequest('Title is required', 'title_is_required');
        if (!status)
            throw ApiError.BadRequest('Status is required', 'status_is_required');
        if (!category)
            throw ApiError.BadRequest('Category is required', 'category_is_required');
        if (!price)
            throw ApiError.BadRequest('Price is required', 'price_is_required');
    }

    updateApplication(id: number) {
        if (!id)
            throw ApiError.BadRequest('Id is required', 'id_is_required');
    }
}

export default new ValidationService();