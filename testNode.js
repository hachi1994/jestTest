let axios = require('axios')

axios.get('http://120.55.162.212:3000/userList').then((response) => {
    console.log(response.data)
})