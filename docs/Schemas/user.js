module.exports = {
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "User identification number",
            example: "27d02853227c918269b866148309f808bc6edb77",
        },
        name: {
            type: "string",
            description: "User's name",
            required: true,
            example: "Sourabh Jana",
        },
        email: {
            type: "String",
            description: "This is email of a User",
            required: true,
            example: "sourabh.jana@cubexo.io",
        },
        password: {
            type: "String",
            description: "This is a password of a User",
            required: true,
            example: "password"
        },
        avatar: {
            type: "object",
            properties: {
                public_id: {
                    type: "String",
                    required: true,
                    example: "This is sample id"
                },
                uri: {
                    type: "String",
                    required: true,
                    example: "This is sample Image uri"
                }
            }
        },
        role: {
            type: "String",
            example: "user"
        },
        resetPasswordToken: {
            type: "String"
        },
        resetPasswordExpire: {
            type: "Date"
        }
    },
}
