import React from 'react';

const TodoItem = ({ todo, itemContent, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            return item;
        }));
    }

    return (
        <div className="todo p-2 d-flex align-items-center justify-content-center">
            <li className={`bg-white p-2 mr-1 ${todo.isCompleted ? "todo-completed" : ""}`}>{itemContent}</li>
            <button 
                onClick={completeHandler} 
                className={`btn mr-1 ${todo.isCompleted ? "btn-primary" : "btn-dark"}`}
            >
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="btn btn-danger">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default TodoItem;