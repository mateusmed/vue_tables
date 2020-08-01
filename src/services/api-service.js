import axios from 'axios'


const baseURL = 'http://localhost:3000';


const ApiService = {

    getBaseUrl() {
        return baseURL;
    },
    ///v1/bpi/currentprice.json
    get(resource) {
        return axios.get(`${baseURL}${resource}`)
    },
};

export default ApiService