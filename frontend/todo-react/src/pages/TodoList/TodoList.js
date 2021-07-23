import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://127.0.0.1:8000/api");
      const body = await response.json();

      setTodoList(body);
    }

    getData();
  }, []);

  const getListItems = () => {
    return todoList.map((todoItem, index) => {
      return (
        <li className="list-group-item" key={index}>
          <h3>{todoItem.title}</h3>
          {todoItem.body}
        </li>
      );
    });
  };

  return (
    <div className="container mt-5">
      <h2>Todo List</h2>
      <ul className="list-group">{todoList && getListItems()}</ul>
    </div>
  );
}
