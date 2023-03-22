module.exports = {
    tags: ["Product"],
    description: "Create Product",
    operationId: "createProduct",
    parameters: [],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Product",
                },
            },
        },
    },
    responses: {
        201: {
            description: "Product created successfully",
            content: {
                "application/json" : {
                    schema: {
                        $ref: "#/components/schemas/Product"
                    },
                },
            },
        },
        500: {
            description: "Server error",
        },
    },
}