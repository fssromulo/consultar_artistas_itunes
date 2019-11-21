import axios from 'axios';

const api = axios.create({
	baseURL: 'https://itunes.apple.com/',
	headers: {
		'Access-Control-Allow-Origin': 'https://master.d2p2cncjbq20vv.amplifyapp.com/',
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Access-Control-Allow-Credentials': true,
		"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
	}
});

export default api;