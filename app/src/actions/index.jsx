import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const UPDATE_DATA = 'QUOTE_RETRIEVED';
export const FETCH_FAILED = 'FETCH_FAILED';


export const getData = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_DATA });
        axios.get('')
        .then(res => {
            dispatch({type: UPDATE_DATA, payload: res.data})
        })
        .catch(err => {
            console.error('Error fetching data from api: ', err)
            dispatch({type: FETCH_FAILED, payload: 'Error fetching data'})
        })
    }
}