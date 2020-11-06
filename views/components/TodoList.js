import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortDown, faBan } from '@fortawesome/free-solid-svg-icons';
import './Todolist.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.filterByStatus = this.filterByStatus.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.removeAllCompleted = this.removeAllCompleted.bind(this)
    }

    create(newTodo) {
        this.setState ({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            return (todo.id === id) ?
            { ...todo, task: updatedTask } :
            todo;
        });
        this.setState ({ todos: updatedTodos });
    }
    removeAllCompleted(){ 
        const updatedTodos = this.state.todos.filter(t => t.completed !== true);
        this.setState ({ todos: updatedTodos });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            return (todo.id === id) ?
            { ...todo, completed: !todo.completed } :
            todo;
        });
        this.setState ({ todos: updatedTodos });
    }

    filterByStatus() {
        const sortedArray = this.state.todos.sort(function(t, f)
                {return t.completed-f.completed});
        this.setState ({ todos: sortedArray });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo 
                    task={todo.task} 
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed}
                    updateTodo={this.update}
                    removeTodo={this.remove} 
                    toggleTodo={this.toggleCompletion}
                />
            )
        })
            return (
            <div className='TodoList'>
                <h1>Todo List <span>React Native ToDo List</span></h1>
                <ul> {todos} </ul>
                <div className='TodoList-toggle'>
                    <span className='TodoList-buttondesc'>Sort Checked-off Items To Bottom</span>
                        <button onClick={this.filterByStatus}>
                            <FontAwesomeIcon icon={faSortDown} size={20} color={'white'} className={'TodoList-icons'} />
                        </button>
                </div>
                <div className='TodoList-toggle'>
                    <span className='TodoList-buttondesc'>Delete All Checked-off Items</span>
                        <button onClick={this.removeAllCompleted}>
                            <FontAwesomeIcon icon={faBan} size={20} color={'white'} className={'TodoList-icons'} />
                        </button>
                </div>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;