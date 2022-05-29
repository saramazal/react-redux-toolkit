
const NewTodoForm = ({ text, handleInput, handleAction }) => {
  return (
      <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleAction}>Add Todo</button> 
    </label>
  );
}

export default NewTodoForm;