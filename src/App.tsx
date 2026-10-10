import { decrement, increment, incrementByAmount } from "./redux/slices";
import { Dispatch, StoreReduxState } from "./redux/types";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import UserForm from "./UserForm";
import Dogs from "./Dogs";
import "./App.css";

function App() {
  const dispatch: Dispatch = useAppDispatch();
  const count: number = useAppSelector(
    (state: StoreReduxState): number => state.counter.count
  );

  return (
    <>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>5+</button>
      </div>
      <hr />
      <UserForm />
      <hr />
      <Dogs />
    </>
  );
}

export default App;
