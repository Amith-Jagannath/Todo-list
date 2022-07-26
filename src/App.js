import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
function App() {
  const onDelete = (todo) => {
    console.log("Clicked", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("todo added", title, desc);
    //let sno = todos[todos.length - 1].sno + 1;
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Job to be done1",
      desc: "charge your laptop",
    },
    {
      sno: 2,
      title: "Job to be done2",
      desc: "Learn DSA",
    },
    {
      sno: 3,
      title: "Job to be done3",
      desc: "Learn competetive programming",
    },
    {
      sno: 3,
      title: "Job to be done4",
      desc: "Do minor projects",
    },
  ]);
  return (
    <>
      <Header title="My todos list" search={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
