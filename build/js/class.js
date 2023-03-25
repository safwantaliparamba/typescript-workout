"use strict";
class User_ {
    constructor(username, password, email_) {
        this.username = username;
        this.password = password;
        this.email_ = email_;
    }
    get password_() {
        return `hashed password`;
    }
    set password_(new_password) {
        if (new_password.length < 8) {
            throw new Error("Password must be at least 8 characters");
        }
        this.password = new_password;
    }
}
const safwan = new User_("safwan", "sjhg72873@#1", "safwan@example.com");
console.log('====================================');
console.log(safwan.password_);
console.log('====================================');
