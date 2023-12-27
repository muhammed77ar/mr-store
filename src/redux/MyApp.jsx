import { useDispatch, useSelector } from "react-redux";

export default function MyApp() {
  const counter = useSelector((state) => state.counter.counter);
  const islogged = useSelector((state) => state.islogged.islogged);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleIsLogged = () => {
    dispatch({ type: "ISLOGGED" });
  };

  return (
    <div>
      <h1>Counter:</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h3>User is {islogged ? 'logged in' : 'not logged in'}</h3>
      <button onClick={toggleIsLogged}>Toggle Login Status</button>
    </div>
  );
}
