import React from "react";

export const Todo = ({ todo, onDelete }) => {
  const myStyle1 = {
    margin: "10px",
    border: "1px solid black",
    padding: "25px",
    width: "100vh",
    // background: "purple",
  };
  return (
    <div className="container" style={myStyle1}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger "
        onClick={() => {
          onDelete(todo);
        }}
      >
        delete
      </button>
    </div>
  );
};
