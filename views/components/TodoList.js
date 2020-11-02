import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
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
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            return (todo.id === id) ?
            { ...todo, completed: !todo.completed } :
            todo;
        });
        this.setState ({ todos: updatedTodos });
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
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;