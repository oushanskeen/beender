import * as types from '../constants/ActionTypes';
import 'cross-fetch/polyfill';

export const love = id => {
    console.log({ type: types.LOVE, id })
    return { type: types.LOVE, id };
};
export const hate = id => {
    console.log({ type: types.HATE, id })
    return { type: types.HATE, id };
};
export const select = id => {
    console.log({ type: types.SELECT, id })
    return { type: types.SELECT, id };
};
export const deselect = () => {
    console.log({ type: types.DESELECT})
    return { type: types.DESELECT};
};
export const outcome = id => {
    console.log({ type: types.OUTCOME, id})
    return { type: types.OUTCOME, id};
};
export const home = () => {
    console.log({ type: types.HOME});
    return { type: types.HOME };
};

export const fetchHelloRequest = () => {
    console.log({ type: types.FETCH_HELLO_REQUEST});
    return { type: types.FETCH_HELLO_REQUEST};
};

export const fetchHelloResponse = (data) => {
    console.log({ type: types.FETCH_HELLO_RESPONSE });
    return { type: types.FETCH_HELLO_RESPONSE, data };
};

export const fetchGalleryRequest = () => {
    console.log({ type: types.FETCH_GALLERY_REQUEST});
    return { type: types.FETCH_GALLERY_REQUEST};
};
export const fetchGalleryResponse = (body) => {
    console.log({ type: types.FETCH_GALLERY_RESPONSE, body });
    return { type: types.FETCH_GALLERY_RESPONSE, body };
};
export const fetchGalleryFailure = (ex) => {
    console.log({ type: types.FETCH_GALLERY_FAILURE, ex });
    return { type: types.FETCH_GALLERY_FAILURE, ex};
};
export const fetchGallery = () => {
    return dispatch => {
        dispatch(fetchGalleryRequest());
        return fetch('http://localhost:3001/gallery')
            .then(res => res.json())
            .then(body => dispatch(fetchGalleryResponse(body)))
            .then(ex => dispatch(fetchGalleryFailure(ex)))
    };
};    

/*
export const FETCH_HELLO_REQUEST = "FETCH_HELLO_REQUEST";
function fetchHelloRequest(){
    return {
        type: FETCH_HELLO_REQUEST,
    };
};
export const FETCH_HELLO_SUCCESS = "FETCH_HELLO_SUCCESS";
function fetchHelloSuccess(body){
    return {
        type: FETCH_HELLO_SUCCESS,
        body
    };
};
export const FETCH_HELLO_FAILURE = "FETCH_HELLO_FAILURE";
function fetchHelloFailure(err){
    return {
        type: FETCH_HELLO_FAILURE,
        err
    };
};

export function fetchHello(){
    return dispatch => {
        dispatch(fetchHelloRequest());
        return fetch('http://localhost:5000/hello')
            .then(res => res.json())
            .then(body => 
                dispatch(fetchHelloSuccess(body)))
            .then(err => 
                dispatch(fetchHelloFailure(err)))    
    };
};
//fetchHello();
*/
