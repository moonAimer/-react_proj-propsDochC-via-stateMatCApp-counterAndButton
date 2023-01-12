import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [initialCount, setInitialCount] = useState(0);

  const myFn = () => {
    setInitialCount(+=+initialCount);
  };

  return (
    <div className="App">
      <Counter count={initialCount} />
      <Button onClick={myFn} />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
