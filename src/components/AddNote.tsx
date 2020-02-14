import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { TodoStore } from '../store';
import 'semantic-ui-css/semantic.min.css';

interface AddTodoProps {}

interface AddTodoState {
    name: string;
}

interface Injected extends AddTodoProps {
    todoStore: TodoStore;
}

@inject('todoStore')
class AddTodo extends Component<AddTodoProps, AddTodoState> {
    
    private inputElement: React.RefObject<HTMLInputElement>;
    constructor(props: any){
        super(props)

        this.state = {
            name: ""
        }
        this.inputElement = React.createRef();
    }
    
    get injected() {
        return this.props as Injected;
    }

    setNoteName = (text: any) => this.setState({name: text.target.value});

    addNote = () =>{
        this.injected.todoStore.addNote(this.state.name);
        this.inputElement.current!.value = '';
        this.setState({name: ''});
    }

    render() {
        return (
            <div className="ui input focus" style={{marginBottom:"2rem"}}>
                <input ref={this.inputElement} type="text" placeholder="Add a note" onChange={this.setNoteName} />
                <button 
                disabled={!this.state.name}
                onClick={this.addNote} style={{marginLeft: "10px"}} className="ui primary button">Add Note</button>
            </div>
        )
    }
}

export default AddTodo;
