export const InputTodo = (props) => {
  const { inputText, onChangeText, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        onChange={onChangeText}
        value={inputText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
