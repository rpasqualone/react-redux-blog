import axios from 'axios';

const API_KEY = '?key=richard.pasqualone';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export const CREATE_POST = 'CREATE_POST';
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}
