module.exports = {
    tags: ["Authentication"],
    description: "Reset Password",
    operationId: "resetPassword",
    parameters: [],
    responses: {
        200: {
            description: "Password is changed"
        },
        500: {
            description: "Server error"
        }
    }
}