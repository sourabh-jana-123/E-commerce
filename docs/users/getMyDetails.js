module.exports = {
    tags: ["User"],
    description: "Get user by id --Admin",
    operationId: "getUserById",
    parameters: [
        {
            name: "id",
            in: "path",
            schema: {
                $ref: "#/components/schema/id",
            },
            required: true,
            description: "A single User by Id"
        }
    ],
    responses: {
        200: {
            description: "User is obtained",
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