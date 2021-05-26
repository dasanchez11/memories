import * as api from '../../api/index';
import PostActionTypes from './posts.types'

// Action Creators

export const getPosts = () => 
     async dispatch => {
    try {
        const {data} = await api.fetchPosts();

        await dispatch({type:PostActionTypes.FETCH_ALL_POSTS, payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const data = await api.createPost(post)
        dispatch({type:PostActionTypes.CREATE_POST,payload:data})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const data = await api.updatePost(id,post);


        dispatch({type:PostActionTypes.UPDATE_POST, payload:post})

    } catch (error) {
        console.log(error.message)
        
    }
};


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type:PostActionTypes.DELETE_POST, payload:id})
        
    } catch (error) {

        console.log(error.message)
        
    }
}


export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);

        dispatch({type:PostActionTypes.LIKE_POST, payload:data});
        
    } catch (error) {
        console.log(error)
        
    }
}
