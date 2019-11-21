import axios from 'axios';

const api = axios.create({
	baseURL: 'https://itunes.apple.com/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
});

export default api;