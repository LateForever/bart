import axios from 'axios';

class Route {
    async get(path) {
        const response = await axios.get(path);
        return response.data;
    }

    async post(path, data) {
        const response = await axios.post(path, data);
        return response.data;
    }

    async put(path, data) { 
        const response = await axios.put(path, data);
        return response.data;
    }
     
    async delete(path) {
        const response = await axios.delete(path);
        return response.data;
    }
}