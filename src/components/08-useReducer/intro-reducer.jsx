const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    
    if( action?.type === 'ADD_TODO' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);