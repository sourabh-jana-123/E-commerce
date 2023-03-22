module.exports = {
    // operation's method
    post: {
        tags: ["Authentication"],
        description: "Login User",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserInput",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "User loggedin successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};