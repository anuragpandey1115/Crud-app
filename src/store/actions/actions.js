import * as actionTypes from './types'

export const addTodo = (value) => {
    return {
        type: actionTypes.ADD,
        data: value
    }
}

export const addNewCategory = (value) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        data: value
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE,
        data: id
    }
}

export const updateTodo = (value) => {
    return {
        type: actionTypes.UPDATE,
        data: value
    }
}

export const complete = (id) => {
    return {
        type: actionTypes.COMPLETE,
        data: id
    }
}



