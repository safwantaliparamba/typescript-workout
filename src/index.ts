interface User {
    username: string,
    pk ?: string,
    id ?: string,
    first_name ?: string,
    email ?: string,
}

interface HttpRequest {
    user: User,
    isAuthenticated: boolean,
    data?: object,
}

const getRequest = (req: HttpRequest)=>{
    console.log(req.user.email)
}

const request = {
    user: {
        username: "safwan"
    },
    isAuthenticated: false,
    data: {}
}

getRequest(request)