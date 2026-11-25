import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data);
};

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
}

const updatePerson = (newData, id) => {
    return axios.put(`${baseUrl}/${id}`, newData).then(res => res.data)
}

export default { getAll: getAll, create: create, deletePerson: deletePerson, update: updatePerson };