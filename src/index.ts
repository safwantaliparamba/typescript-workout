interface User {
    username: string,
    pk ?: string,
    id ?: string,
    first_name ?: string,
    email ?: string,
    is_valid ?: ({data=329})=> void,
}

type HttpRequest ={
    user: User,
    isAuthenticated: boolean,
    data?: object,
}

const getRequest = (req: HttpRequest)=>{
    console.log(req.user.email)
}

const request:HttpRequest = {
    user: {
        username: "safwan",
        is_valid:({data})=>{
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        }
    },
    isAuthenticated: false,
}

getRequest(request)