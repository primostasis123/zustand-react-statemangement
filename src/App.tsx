import "./App.css";
import { useCounterStore } from "./store";


function App() {

  return (
    <>
      <div className="card">
        <OtherComponent />
      </div>
    </>
  );
}

const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      {count}
      <br />
      <ButtonComponent/>
    </div>
  );
};

const ButtonComponent = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default App;
