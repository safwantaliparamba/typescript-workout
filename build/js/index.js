"use strict";
const getRequest = (req) => {
    console.log(req.user.email);
};
const request = {
    user: {
        username: "safwan",
        is_valid: ({ data }) => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        }
    },
    isAuthenticated: false,
};
getRequest(request);
