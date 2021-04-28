import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, sign_in } from "./actions";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter: {counter} </h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3> isLogged: {isLogged} </h3>
      <button onClick={() => dispatch(sign_in())}>sign in</button>
    </div>
  );
}
