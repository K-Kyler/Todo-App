import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        
        if (inputText === "") {
            alert("You have not typed in anything :D");
            return;
        }

        setTodos([
            ...todos,
            { id: Math.random() * 1000, text: inputText, isCompleted: false }
        ]);

        setInputText('');
    }

    return (
        <div className="container pt-5">
            <form className="todo-form" onSubmit={submitTodoHandler}>
                <div className="form-group row">
                    <div className="offset-md-2 col-12 col-md-6 d-flex">
                        <input value={inputText} onChange={inputTextHandler} type="text" className="form-control" placeholder="What need to be done?" />
                        <button type="submit" className="btn btn-danger ml-1">
                            <i className="fa fa-plus-square"></i>
                        </button>
                    </div>

                    <div className="col-12 col-md-2 col-2">
                        <select className="form-control">
                            <option>All</option>
                            <option>Completed</option>
                            <option>Uncompleted</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;