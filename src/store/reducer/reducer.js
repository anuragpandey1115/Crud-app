import * as actionTypes from '../actions/types'

const initialState = {
    todosList: [
        {id: 1, content: 'user login', done: false, category: 'punit'},
        {id: 2, content: 'redux', done: false, category: 'vaibhav'}
    ],
    categories: [
        {id: 0, name: 'Choose Category', value: ''},
        {id: 1, name: 'Food', value: 'Food'}
    ],
    data: ''
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                todosList: [...state.todosList, action.data]
            };
        case actionTypes.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.data]
            };
        case actionTypes.DELETE:
            const todo = state.todosList.filter(todo => todo.id !== action.data)
            return {
                ...state,
                todosList: todo
            };
        case actionTypes.COMPLETE:
            return {
                ...state,
                todosList: state.todosList.map(item => {
                    if (item.id === action.data) {
                        item['done'] = true;
                        return item;
                    }
                    return item;
                })
            };
        case actionTypes.UPDATE:
            return {
                ...state,
                todosList: state.todosList.map(item => {
                    if (item.id === action.data.id) {
                        item['content'] = action.data.content;
                        item['category'] = action.data.category;
                        return item;
                    }
                    return item;
                }),
            };
    }

    return state;
}
