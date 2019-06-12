import React, {Fragment, useState} from 'react';
import './App.css';

import {ITodos} from './Interfaces';
import {Button, Jumbotron} from "reactstrap";

type formEle = React.FormEvent<HTMLFormElement>

function App(props:any): JSX.Element {

    const [value, setValue] = useState<string>("");
    const [todos, setTodos] = useState<ITodos[]>([]);

    const setChange = (v: any): any => {
        setValue(v)
    };

    const handleSubmit = (e: formEle): void => {
        e.preventDefault();
        setValue('');
        addTodos(value)
    };

    const addTodos = (text: string): void => {
        const newTodos: ITodos[] = [...todos, {text: text, complete: false}];
        setTodos(newTodos);
    };

    const completedTodos = (index: number): void => {
        const newTodos: ITodos[] = [...todos]
        todos[index].complete = !todos[index].complete
        setTodos(newTodos)
    };

    const removeTodos = (index: number): void => {
        const newTodos: ITodos[] = [...todos];

        newTodos.splice(index,1);
        setTodos(newTodos)
    };

    const backPage = () => {
        props.history.replace('/');
    };

    return (
        <Fragment>
            <div className="title">Todo List</div>
            <section>
                <p className="lead">
                    <Button color="primary" onClick={backPage}>&larr;</Button>
                </p>
            </section>
            <form onSubmit={handleSubmit} action="">
                <div className="grid">
                    <input type="text" placeholder="What need to done?" value={value} onChange={(e) => {
                        setChange(e.target.value)
                    }} required/>
                    <button>Add Todo</button>
                </div>


                {todos.map((todo: ITodos, index: number) => (
                    <Fragment key={index}>
                        <div className="list-wrap">
                            <div style={{textDecoration:todo.complete? 'line-through' : ''}}>{todo.text}</div>
                            <button type="button" onClick={()=>{
                                completedTodos(index)
                            }}>{todo.complete? "Complete" : "Incomplete"}</button>

                            <button type="button" onClick={()=>removeTodos(index)}>&times;</button>
                        </div>

                    </Fragment>
                ))}
            </form>


        </Fragment>
    );
}

export default App;
