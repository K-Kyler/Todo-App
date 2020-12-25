import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="container pt-3">
            <ul className="list-unstyled">
                {todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            itemContent={todo.text} 
                            todo={todo}
                            todos={todos} 
                            setTodos={setTodos} 
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;