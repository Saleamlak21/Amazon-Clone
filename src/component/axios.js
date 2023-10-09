import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-fifth-base-398400.cloudfunctions.net/api',
})

export default instance;