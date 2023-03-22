module.exports = {
    tags: ["User"],
    description: "Get all users --Admin",
    operationId: "getUserById",
    parameters: [],
    responses: {
        200: {
            description: "Users were obtained",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User",
                    },
                },
            },
        },
        404: {
            description: "User is not found",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Error",
                    },
                },
            },
        },
    },
}