import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <div className="container pt-3">
            <ul className="list-unstyled">
                {todos.map((todo) => {
                    return (
                        <TodoItem todo={todo.text} key={todo.id} />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;