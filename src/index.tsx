import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "mobx-react";
import { TodoStore } from './store';
import App from './App';

const Root = (
    <Provider todoStore={new TodoStore()}>
        <App />
    </Provider>
); 

ReactDOM.render(Root, document.getElementById('root'));


