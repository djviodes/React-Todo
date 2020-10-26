import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    const handleClick = () => {
        props.handleClearTodo();
    }

    return (
        <div>
            {props.todo.map(item => (
                <Todo handleToggleTodo={props.handleToggleTodo} key={item.id} todo={item} />
            ))}
            <button onClick={handleClick}>
                Clear Finished
            </button>
        </div>
    );
};

export default TodoList;