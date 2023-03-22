module.exports = {
    // operation's method
    post: {
        tags: ["Authentication"], // operation's tag
        description: "Register User", // short desc
        operationId: "createUser", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserInput", // todo input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: "User registered successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};