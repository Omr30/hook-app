import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ];

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: 'Nueva Tarea',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action);
  }

  return (
    <>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {" "}
                  {i + 1}. {todo.desc}{" "}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                />

                <button
                    type="submit" 
                    className="btn btn-outline-primary mt-1 w-100"
                >
                    Agregar
                </button>

            </form>

        </div>
      </div>
    </>
  );
};
