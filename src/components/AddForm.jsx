import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
  // installing dispatch
  const dispatch = useDispatch();

  // sending form
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating todo object
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };

    // add to database
    axios
      .post("/todos", newTodo)
      // if added then update store
      .then(() => dispatch(addTodo(newTodo)))
      // if not added give warning
      .catch(() => alert("There is a problem while adding"));

    // Adding todo to store
    //dispatch({
    //type: ActionTypes.ADD_TODO,
    //payload: newTodo,
    //});
    //Easy Way
    //dispatch(addTodo(newTodo));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex gap-2 justify-content-center"
    >
      <input className="form-control" type="text" />
      <button className="btn btn-lg btn-outline-light">Add</button>
    </form>
  );
};

export default AddForm;
