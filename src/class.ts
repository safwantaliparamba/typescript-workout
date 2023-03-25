
class User_{
    constructor (
        public username:string,
        private password:string,
        public email_:string){}

    get password_():string { 
        return `hashed password`
    }

    set password_(new_password:string){

        if (new_password.length < 8){
            throw new Error("Password must be at least 8 characters")
        }
        this.password = new_password;

    }

    
}

const safwan = new User_("safwan","sjhg72873@#1","safwan@example.com")

console.log('====================================');
console.log(safwan.password_);
console.log('====================================');