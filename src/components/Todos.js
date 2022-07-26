import React from "react";
import { Todo } from "./Todo";
export const Todos = (props) => {
  const myStyle = {
    //minheight: "70vh",
    //margin: "10px 0px",
  };
  return (
    <div className="container " style={myStyle}>
      <h1 className=" my-5">Todos List</h1>
      {props.todos.length === 0
        ? "Please add some Todos!!!"
        : props.todos.map((todo) => {
            return <Todo todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
