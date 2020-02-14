import {observable, action} from 'mobx';

let noteId = 0;
let todoId = 0;

export interface INote {
    id: number;
    name: string;
    createDate: number;
    lastEdit: number;
    todos: TodoItem[];
};

export interface TodoItem {
    id: number;
    name: string;
    completed: boolean;
}

export class TodoStore {
    @observable notes: INote[] = [];
 
    @action addNote = (name: string) =>{
        if(this.notes.length >= 10){
            alert("Maximum notes is 10")
        }else{
            this.notes.push({
                id: noteId++,
                name,
                createDate: Date.now(),
                lastEdit: Date.now(),
                todos: []
            });
        }   
    }

    @action deleteNote = (n:number) => {
        let newone = this.notes.filter(note =>  note.id !== n);
        this.notes = newone;
    }
 
    @action addTodoItem = (name: string, note: INote) => {
        if(note){
            note.lastEdit = Date.now();
            note.todos.push({
                id: todoId++,
                name,
                completed: false
            });
        }
    }

    @action handleTodo = (todo : TodoItem) => {
        todo.completed = !todo.completed;
    }

} 