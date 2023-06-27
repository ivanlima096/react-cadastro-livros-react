import axios from 'axios';
const inAxios = axios.create({ baseURL: 'http://localhost:3001/' });

export default inAxios