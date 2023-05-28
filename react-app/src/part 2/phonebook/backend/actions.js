import axios from "axios";
const url = 'http://localhost:3001/api/db';

const getAll = () => {
    const request = axios.get(url);
    return request.then(response => response.data);
}

const addNew = (newItem) => {
    const request = axios.post(url, newItem);
    return request.then(response => response.data);
}

const deleteNumber = (id) => {
    return axios.delete(`${url}/${id}`);
}

export {getAll, addNew, deleteNumber};

