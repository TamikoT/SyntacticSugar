import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state= { 
            isEditing: false,
            task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState ({ isEditing: false });
    }
    toggleForm() {
        this.setState ({
            isEditing: !this.state.isEditing
        })
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    handleChange(evt){
        this.setState ({
            [evt.target.name]: evt.target.value
        });
    }
    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input 
                            type='text' 
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className='Todo'>
                    <li 
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.handleToggle}
                    >{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}><FontAwesomeIcon icon={faEdit} size={20} color={"white"} /></button>
                        <button onClick={this.handleRemove}><FontAwesomeIcon icon={faTrashAlt} size={20} color={"white"} /></button>
                    </div>
                </div>
                );
            }
        return result;
    }
}

export default Todo; 