import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-handle.herokuapp.com'
})

export default instance;