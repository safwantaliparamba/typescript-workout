"use strict";
const getRequest = (req) => {
    console.log(req.user.email);
};
const request = {
    user: {
        username: "safwan"
    },
    isAuthenticated: false,
    data: {}
};
getRequest(request);
