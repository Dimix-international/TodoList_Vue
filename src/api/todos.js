import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default {
    getTodos: () => (axios.get(`${baseUrl}/todos?_limit=10`)),
    removeTodo: (id) => (axios.delete(`${baseUrl}/todos/${id}`)),
    createTodo: (todo) => (axios.post(`${baseUrl}/todos`, {...todo}))
}