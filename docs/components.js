// module.exports = {
//     components: {
//         schemas: {
//             // id model
//             id: {
//                 type: "string", // data type
//                 description: "An id of a User/Product/Order", // desc
//                 example: "27d02853227c918269b866148309f808bc6edb77", // example of an id
//             },
//             EmailInput: {
//                 type: "object",
//                 properties: {
//                     email: {
//                         type: "String",
//                         description: "User's Email id",
//                         example: "sourabh.jana@cubexo.io",
//                     },
//                 },
//             },
//             // User model
//             User: {
//                 type: "object", // data type
//                 properties: {
//                     id: {
//                         type: "string", // data-type
//                         description: "User identification number", // desc
//                         example: "27d02853227c918269b866148309f808bc6edb77", // example of an id
//                     },
//                     name: {
//                         type: "string", // data-type
//                         description: "User's name", // desc
//                         required: true,
//                         example: "Sourabh Jana", // example of a title
//                     },
//                     email: {
//                         type: "String", // data type
//                         description: "This is email of a User", // desc
//                         required: true,
//                         example: "sourabh.jana@cubexo.io", // example of a completed value
//                     },
//                     password: {
//                         type: "String",
//                         description: "This is a password of a User",
//                         required: true,
//                         example: "password"
//                     },
//                     avatar: {
//                         type: "object",
//                         properties: {
//                             public_id: {
//                                 type: "String",
//                                 required: true,
//                                 example: "This is sample id"
//                             },
//                             uri: {
//                                 type: "String",
//                                 required: true,
//                                 example: "This is sample Image uri"
//                             }
//                         }
//                     },
//                     role: {
//                         type: "String",
//                         example: "user"
//                     },
//                     resetPasswordToken: {
//                         type: "String"
//                     },
//                     resetPasswordExpire: {
//                         type: "Date"
//                     }
//                 },
//             },
//             // User input model
//             UserInput: {
//                 type: "object", // data type
//                 properties: {
//                     name: {
//                         type: "string", // data type
//                         description: "User's Name", // desc
//                         example: "Sourabh Jana", // example of a title
//                     },
//                     email: {
//                         type: "String", // data type
//                         description: "User's Email id", // desc
//                         example: "sourabh.jana@cubexo.io", // example of a completed value
//                     },
//                     password: {
//                         type: "String",
//                         description: "User's password",
//                         password: "password"
//                     }
//                 },
//             },
//             UpdateUserInput: {
//                 type: "object", // data type
//                 properties: {
//                     name: {
//                         type: "string", // data type
//                         description: "User's Name", // desc
//                         example: "Sourabh Jana", // example of a title
//                     },
//                     email: {
//                         type: "String", // data type
//                         description: "User's Email id", // desc
//                         example: "sourabh.jana@cubexo.io", // example of a completed value
//                     }
//                 },
//             },
//             UpdateUserDetailsAdmin: {
//                 type: "object", // data type
//                 properties: {
//                     name: {
//                         type: "string", // data type
//                         description: "User's Name", // desc
//                         example: "Sourabh Jana", // example of a title
//                     },
//                     email: {
//                         type: "String", // data type
//                         description: "User's Email id", // desc
//                         example: "sourabh.jana@cubexo.io", // example of a completed value
//                     },
//                     role: {
//                         type: "String",
//                         description: "User's role",
//                         example: "User/Admin"
//                     }
//                 },
//             },
//             securitySchemes: {
//                 cookieAuth: {
//                     type: apiKey,
//                     in: cookie,
//                     name: JSESSIONID
//                 },
//                 ApiKeyAuth: {
//                     type: apiKey,
//                     in: header,
//                     name: X - API - KEY
//                 }
//             },
//             security: {
//                 ApiKeyAuth: []
//             },
//             // error model
//             Error: {
//                 type: "object", //data type
//                 properties: {
//                     message: {
//                         type: "string", // data type
//                         description: "Error message", // desc
//                         example: "Not found", // example of an error message
//                     },
//                     internal_code: {
//                         type: "string", // data type
//                         description: "Error internal code", // desc
//                         example: "Invalid parameters", // example of an error internal code
//                     },
//                 },
//             },
//         },
//     },
// };
const userSchema = require('./Schemas/user')
const productSchema = require('./Schemas/product')
const orderSchema = require('./Schemas/order')

module.exports = {
    components: {
        // Reusable schemas (data models)
        schemas: {
            id: {
                type: "string",
                description: "An id of a User/Product/Order",
                example: "27d02853227c918269b866148309f808bc6edb77"
            },
            User: {
                ...userSchema
            },
            // Product: {
            //     ...productSchema
            // },
            // Order: {
            //     ...orderSchema
            // },
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
        // Reusable path, query, header and cookie parameters
        parameters: {

        },
        // Security scheme definitions(see Authentication)
        securitySchemes: {
            bearerAuth: {
                // type: html,
                // scheme: bearer,
                // bearerFormat: JWT
            }
        },
        // Reusable request bodies
        requestBodies: {

        },
        // Reusable responses, such as 401 Unauthorized or 400 Bad Request
        responses: {

        },
        // Reusable response headers
        headers: {

        },
        // Reusable examples
        examples: {

        },
        // Reusable links
        links: {

        },
        // Reusable callbacks
        callbacks: {

        }
    }
}