import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import AddNewTodo from "./components/Todo/AddNewTodo/AddNewTodo";
import DisplayTodo from "./components/Todo/DisplayTodo/DisplayTodo";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./slices/todoSlice";

const todoKey = "todos";

function App() {
  // const [todos, setTodos] = useState([]);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(todoKey)) {
      dispatch(
        todoActions.addMultiple(JSON.parse(localStorage.getItem(todoKey)) ?? [])
      );
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  }, [todos]);

  const AddNewTodoHandler = (todo) => {
    dispatch(todoActions.addNew(todo));
  };

  const ChangeCheckHandler = (todoId) => {
    dispatch(todoActions.toggleCheck(todoId));
  };

  const deleteHandler = (todoId) => {
    dispatch(todoActions.delete(todoId));
  };

  const editHandler = (todoId, newTitle) => {
    dispatch(todoActions.edit({ id: todoId, title: newTitle }));
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column container justify-content-center align-items-center flex-fill">
        <AddNewTodo onSubmit={AddNewTodoHandler} />
        <div className="p-2 w-100 d-flex flex-column gap-2 pt-5">
          {todos.map((todo) => (
            <DisplayTodo
              key={todo.id}
              todo={todo}
              onChangeCheck={ChangeCheckHandler}
              onEdit={editHandler}
              onDelete={deleteHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
