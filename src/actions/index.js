import axios from 'axios';

const API_KEY = '?key=richard.pasqualone';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}
