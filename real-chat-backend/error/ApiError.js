module.exports = class ApiError extends Error {
    status;
    error;
    constructor(status, message) {
        super(message)
        this.status = status
    }

    static badRequest(message) {
        return new ApiError(400, message)
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}