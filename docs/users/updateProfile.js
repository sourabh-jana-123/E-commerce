module.exports = {
    tags: ["User"],
    description: "Update Profile",
    operationId: "updateProfile",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/User",
                },
            },
        },
    },
    responses: {
        200: {
            description: "User is obtained", // response desc.
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User", // todo data model
                    },
                },
            },
        },
        404: {
            description: "User is not found", // response desc.
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Error", // error data model
                    },
                },
            },
        },
    },
}
