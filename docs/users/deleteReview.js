module.exports = {
    tags: ["User"],
    description: "Delete review",
    operationId: "deleteReview",
    parameters: [
        {
            name: "productId",
            in: "header",
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