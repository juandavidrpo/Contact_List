import httpClient from '../httpCommon';

/**
 * Representa las funciones para el consumo de los servicios.
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */
const getAll = () => {
    return httpClient.get('/contacts');
};

const create = (data) => {
    return httpClient.post('/contact', data);
};

const get = (id) => {
    return httpClient.get(`/contacts/${id}`);
};

const update = (data) => {
    return httpClient.put('/contact', data);
};

const remove = (id) => {
    return httpClient.delete(`/contact/${id}`);
};

export default { getAll, create, update, get, remove };
