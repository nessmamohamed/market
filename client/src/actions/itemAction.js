import axios from 'axios'
import {GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/item')
    .then(res => 
        dispatch({
        type: GET_ITEM,
        payload: res.data
    })
    )

    
}

export const addItem = (item) => dispatch => {
    axios.post('/api/item', item )
    .then(res => dispatch({
        type: ADD_ITEM, 
        payload: res.data
    }))
}

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/item/${id}`)
    .then(res => dispatch({
        type: DELETE_ITEM,
        payload: res.data
    }))
}



export const setItemsLoading =(item) =>{
    return {
        type: ITEMS_LOADING,
        payload: item
    }
}