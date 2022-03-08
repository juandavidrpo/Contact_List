import httpClient from '../httpCommon';

const getAll = () => {
    return httpClient.get('/contacts');
};

const create = (data) => {
    return httpClient.post('/contact', data);
};

const update = (data) => {
    return httpClient.put('/contact', data);
};

const remove = (id) => {
    return httpClient.delete(`/contact/${id}`);
};

export default { getAll, create, update, remove };
