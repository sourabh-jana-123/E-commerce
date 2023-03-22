module.exports = {
    tags: ["Authentication"],
    description: "Logout User",
    operationId: "logoutUser",
    parameters: [],
    responses: {
        200: {
            description: "User logged out successfully",
        },
        500: {
            description: "Server error",
        },
    },
};