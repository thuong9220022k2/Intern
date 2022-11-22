import axios from "../axios"

const handleLoginApi = async(data)=>{
    return axios.post("/api/login",{data})
}

module.export = {
    handleLoginApi : handleLoginApi
}