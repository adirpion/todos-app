import React, { Component } from 'react';
import { INote, TodoStore } from '../store';
import TodoList from './TodoList';
import {inject} from 'mobx-react';
import moment from 'moment';
 
interface NoteProps {
    note: INote;
}

interface Injected extends NoteProps {
    todoStore: TodoStore;
}

@inject('todoStore')
export default class Note extends Component<NoteProps> {
    private inputElement: React.RefObject<HTMLInputElement>;
    constructor(props:NoteProps){
        super(props);
        this.inputElement = React.createRef();
    }

    state = {
        todoInput: ""
    }

    get injected() {
        return this.props as Injected;
    }

    setTodo = (e: any) => {
        this.setState({ todoInput: e.target.value })
    }

    addTodo = () => {
        if (!this.state.todoInput) {
            return;
        }
        this.injected.todoStore.addTodoItem(this.state.todoInput, this.props.note);
        this.inputElement.current!.value = '';
        this.setState({ todoInput: '' })
    }

    deleteNote = () =>{
        this.injected.todoStore.deleteNote(this.props.note.id);
    }

    render() {
        return (
            <div className="ui card note" style={{width: "310px"}}>
                <h1><div className="ui black tag label">{this.props.note.name}</div></h1>
                <span className="date">Created at: {moment(this.props.note.createDate).format('lll')}</span>
                <span className="date">Last edit: {moment(this.props.note.lastEdit).format('lll')}</span>
                <p>
                <div className="ui input">
                    <input ref={this.inputElement} type="text" placeholder="Add a Todo" onChange={this.setTodo} />
                    <button 
                        onClick={this.addTodo}
                        disabled={!this.state.todoInput}
                        style={{marginLeft: "10px"}} 
                        className="ui secondary button">
                    Add Todo
                    </button>
                </div>
                <div onClick={this.deleteNote} className="delete-note"><span>X</span></div>
                </p>
                <TodoList todos={this.props.note.todos}/>
            </div>
        )
    }
}
