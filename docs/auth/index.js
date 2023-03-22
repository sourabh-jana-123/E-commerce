const ForgotPassword = require("./Forgot-password")
const LoginUser = require("./Login-user")
const LogoutUser = require("./Logout-user")
const RegisterUser = require("./Register-user")
const ResetPassword = require("./Reset-password")

module.exports = {

    '/register': {
        ...RegisterUser
    },
    '/login': {
        ...LoginUser
    },
    '/logout': {
        get: { ...LogoutUser }
    },
    '/password/forgot': {
        get: { ...ForgotPassword }
    },
    '/password/reset': {
        post: { ...ResetPassword }
    }

}