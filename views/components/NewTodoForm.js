import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState ({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id:uuidv4(), completed: false });
        this.setState({ task: '' });
    }

    render(){
        return(
            <div>
                <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Enter a new todo:</label>
                    <input
                        type='text'
                        name='task'
                        value={this.state.task}
                        placeholder="New Todo"
                        onChange={this.handleChange}
                        key= {uuidv4}
                        id= 'task'
                    />
                    <button> Add </button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;