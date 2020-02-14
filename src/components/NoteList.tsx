import React, {Component} from 'react';
import { inject, observer} from 'mobx-react';
import { INote } from '../store';
import Note from './Note';

interface NoteStore {
    todoStore? : NoteProps;
}

interface NoteProps {
    notes : INote[];
}

@inject('todoStore')
@observer
class NoteList extends Component<NoteStore>{
    render(){
        return (
            <div className="ui four column doubling stackable grid container note-container">
                { this.props.todoStore!.notes.map((item:INote) => <p><Note note={item} /></p>) }
            </div>
        )
    }
}

export default NoteList;
