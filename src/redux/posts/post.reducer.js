import PostActionTypes from './posts.types'

const postReducer = (posts= [],action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_ALL_POSTS:
            return action.payload;

        case PostActionTypes.CREATE_POST:
            return [...posts, action.payload]
        case PostActionTypes.UPDATE_POST:
            return posts.map(post=> post._id === action.payload._id ? action.payload : post)
        case PostActionTypes.DELETE_POST:
            return posts.filter(post=> post._id !== action.payload)
        
            case PostActionTypes.LIKE_POST:
            return posts.map(post=> post._id === action.payload._id ? action.payload : post)
    
        default:
            return posts
    }

}; 

export default postReducer;