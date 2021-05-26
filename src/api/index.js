import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();



const url = 'https://memorieap.herokuapp.com/posts'


export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id,updatedPost) =>axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);
