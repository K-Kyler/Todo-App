import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <div className="todo p-2 d-flex align-items-center justify-content-center">
            <li className="bg-white p-2 mr-1">{todo}</li>
            <button className="btn btn-primary mr-1">
                <i className="fa fa-check"></i>
            </button>
            <button className="btn btn-danger">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default TodoItem;