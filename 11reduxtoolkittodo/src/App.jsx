import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
