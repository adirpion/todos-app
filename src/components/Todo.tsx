import React, { Component } from 'react';
import { TodoStore, TodoItem } from '../store';
import { inject, observer } from 'mobx-react';

interface TodoProps {
    todo: TodoItem;
}
interface Injected extends TodoProps {
    todoStore: TodoStore;
}
@inject('todoStore')
@observer
export default class Todo extends Component<TodoProps> {

    get injected() {
        return this.props as Injected;
    }

    public handleChange = () => {
        this.injected.todoStore.handleTodo(this.props.todo)
    }

    render() {
        return (
            <div className="ui checkbox todo">
                <input 
                    type="checkbox" 
                    checked={this.props.todo.completed}
                    onChange={this.handleChange}
                />
                <label 
                    style={{
                        textDecoration: this.props.todo.completed ? "line-through" : "none",
                        color: this.props.todo.completed ? "gray" : "black"
                    }}>
                    {this.props.todo.name}
                </label>
            </div>
        )
    }
}
