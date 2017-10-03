import {FETCH_POSTS} from './action-types';
import axios from 'axios';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '1234';

export default function fetchPosts() {
    console.log("Thunk has been calle");
    const request= axios.get(`${ROOT_URL}?key=${API_KEY}`);

    return (dispatch) => {
       request.then(
           ({data}) => { 
            dispatch({
                type: FETCH_POSTS,
                payload: data
            });
        }
       ); 
    }
}