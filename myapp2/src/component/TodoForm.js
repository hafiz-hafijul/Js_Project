import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const HandleControll = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={HandleControll}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Your Item"
            value={input}
            className="todo-input edit"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit" onClick={HandleControll}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            className="todo-input"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button" onClick={HandleControll}>
            Todo Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
