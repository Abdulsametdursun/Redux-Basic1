import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  // subscript to data in todoReducer
  const state = useSelector((store) => store.todoReducer);
  return (
    <div>
      {state.todos.length === 0 ? (
        <h5>There is nothing in the todo list</h5>
      ) : (
        state.todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default ListTodos;
