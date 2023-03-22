module.exports = {
    tags: ["User"],
    description: "Change Password",
    operationId: "ChangePassword",
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
            description: "Password is changed",
        },
        404: {
            description: "password doesn't match",
        },
        500: {
            description: "Server error",
        },
    },
};