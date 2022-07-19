import axios from 'axios';
const token = localStorage.getItem('token@petfront');

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {'Authorization': token}
});

export function findById(recurso, id) {
    return api.get(recurso+"/"+id); 
}

export function find(recurso, params) {
    return api.get(recurso+"?"+params); 
}

export function create(recurso, params) {
    return api.post(recurso, params);
}

export function destroy(recurso, id) {
    return api.delete(recurso+"/"+id);
}

export default api;