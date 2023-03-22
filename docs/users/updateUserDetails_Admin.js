module.exports = {
    tags: ["User"],
    description: "Update User Details --Admin",
    operationId: "updateUserDetails",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/UpdateUserDetailsAdmin",
                },
            },
        },
    },
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
