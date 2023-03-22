module.exports = {
    tags: ["Authentication"],
    description: "Logout User",
    operationId: "logoutUser",
    parameters: [],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/EmailInput",
                },
            },
        },
    },
    responses: {
        200: {
            description: "Mail is sended to your email",
        },
        500: {
            description: "Server error",
        },
    },
};