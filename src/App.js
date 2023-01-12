import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [initialCount, setInitialCount] = useState(0);

  const myFn = () => {
    setInitialCount(initialCount + 1);
  };

  return (
    <div className="App">
      <Counter count={initialCount} />
      <Button click={myFn} />
      <Button click={myFn} />
      <Button click={myFn} />
      <Button click={myFn} />
    </div>
  );
}

export default App;
