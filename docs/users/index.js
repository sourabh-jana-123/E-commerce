const updateProfile = require("./updateProfile");
const deleteUser_Admin = require("./deleteUser_Admin");
const getSingleUserDetail_Admin = require("./getSingleUserDetail_Admin");
const updateUserDetails_Admin = require("./updateUserDetails_Admin");
const getMyDetails = require("./getMyDetails");
const getAllUsers_Admin = require("./getAllUsers_Admin");
const changePassword = require("./changePassword");

module.exports = {

    "/admin/user/:id": {
        get: { ...getSingleUserDetail_Admin },
        patch: { ...updateUserDetails_Admin },
        delete: { ...deleteUser_Admin }
    },

    "/me": {
        get: { ...getMyDetails },
        put: { ...updateProfile },
    },

    "/admin/users": {
        get: { ...getAllUsers_Admin },
    },

    "/password/update": {
        put: { ...changePassword },
    },

    "/review": {
        get: {},
        put: {},
        delete: {},
    }

}