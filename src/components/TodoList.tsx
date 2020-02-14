import React, { Component } from 'react';
import { TodoItem } from '../store';
import Todo from './Todo';
import { observer } from 'mobx-react';

interface TodoProps {
    todos: TodoItem[];
}

@observer
class TodoList extends Component<TodoProps> {
    render() {
        return (
            <div>
                {this.props.todos.map(item => <Todo todo={item} />)}
            </div>
        )
    }
}

export default TodoList;