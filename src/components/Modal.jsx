import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { editTodo } from "../redux/actions/todoActions";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // determines the new state of the object. The entire text of the object will be replaced by the text from the input.
    const updated = { ...todo, text: e.target[1].value };

    // updates the store
    dispatch(editTodo(updated));

    // close the modal
    close();
  };

  return (
    <div className="modal d-block text-black bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Todo
            </h1>
            <button
              type="button"
              onClick={close}
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label>Determine the New Name for Todo</label>
            <input defaultValue={todo.text} className="form-control"></input>
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
