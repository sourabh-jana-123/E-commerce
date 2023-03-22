module.exports = {
    tags: ["Product"],
    description: "Update Product",
    operationId: "updateProduct",
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
            description: "Product updated successfully",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product"
                    },
                },
            },
        },
        404: {
            description: "Product not found"
        },
        500: {
            description: "Server error",
        },
    },
}