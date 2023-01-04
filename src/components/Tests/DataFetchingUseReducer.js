import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    isLoading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                error: 'Something went wrong',
                post: {}
            }
        default:
            return state
    }
}
const DataFetchingUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( response => {
                dispatch({type: 'FETCH_SUCCESS',payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])
    return (
        <div>
            <p>{ state.isLoading ? 'Loading': state.post.title}</p>
            <p>{ state.error ? state.error: ''}</p>
           
        </div>
    )
}

export default DataFetchingUseReducer