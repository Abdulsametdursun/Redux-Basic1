import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { editTodo, deleteTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // remove the todo from store
  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}`).then(() => {
      // send to reducer
      dispatch(deleteTodo(todo.id));
    });
  };

  const handleUpdate = () => {
    // to determine updated todo
    const updated = { ...todo, is_done: !todo.is_done };

    //update todo in store
    dispatch(editTodo(updated));
  };

  const displayDate = new Date(todo.created_at).toLocaleDateString();

  const handleEdit = () => {};

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>

        <h6>{todo.is_done ? "Done" : "Not Done"}</h6>

        <p>{new Date(todo.created_at).toLocaleDateString()}</p>

        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
          aria-label="Edit todo"
        >
          Edit
        </button>
        <button
          onClick={handleUpdate}
          className="btn btn-success mx-4"
          aria-label="Toggle todo completion status"
        >
          {todo.is_done ? "Mark as Not Done" : "Mark as Completed"}
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-danger mx-4"
          aria-label="Delete todo"
        >
          Delete
        </button>
      </div>

      {/*modal*/}
      {isOpen && (
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          todo={todo}
        />
      )}
    </>
  );
};

export default TodoCard;
