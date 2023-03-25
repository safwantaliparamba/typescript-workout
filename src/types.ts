interface Axios {
    username:string
    password:string
    firstname:string
}

interface AxiosInterceptor extends Axios {
    country:string
}

const axiosInstance: AxiosInterceptor = {
    firstname:"Safwan",
    password:"*******",
    username:"safwan",
    country:"India"
}



export default axiosInstance
