class ApiError extends Error {
    status: number;
    error_info: string;
    errors: any;

    constructor(status: number, message: string, error_info: string = '', errors: any = []) {
        super(message);
        this.status = status;
        this.errors = errors;
        this.error_info = error_info;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Token is not valid', 'invalid_token');
    }

    static BadRequest(message: string, error_info: string, errors: any = []) {
        return new ApiError(400, message, error_info, errors);
    }
}

export default ApiError;