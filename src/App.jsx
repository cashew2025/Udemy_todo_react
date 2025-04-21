import "./App.css";
import { useState } from "react";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  return (
    <div>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          onChange={onChangeText}
          value={inputText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="list-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="list-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
