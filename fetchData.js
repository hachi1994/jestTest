import axios from 'axios'

export const fetchData = (fn)=>{
    axios.get('http://120.55.162.212:3000/userList').then((response)=>{
        fn(response.data)
    })
}
export const fetchTwoData = () => {
    return axios.get('http://120.55.162.212:3000/userList')
}
export const fetchError = () => {
    return axios.get('http://120.55.162.212:3000/userList3weeee')
}
export const fetchAsyncWaitData = () => {
    return axios.get('http://120.55.162.212:3000/userList')
}