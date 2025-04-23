import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // const newCompleteTodos = [...completeTodos];
    // newCompleteTodos.push(incompleteTodos[index]);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (index) => {
    const outCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(outCompleteTodos);
    const outInCompleteTodos = [...completeTodos];
    outInCompleteTodos.splice(index, 1);
    setCompleteTodos(outInCompleteTodos);
  };

  return (
    <div>
      <InputTodo
        inputText={inputText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </div>
  );
};
