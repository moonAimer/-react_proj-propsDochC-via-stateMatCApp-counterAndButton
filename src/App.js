import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [initialCount, setInitialCount] = useState(0);

  return (
    <div className="App">
      <Counter count={initialCount} />
      <Button count={initialCount} click={setInitialCount} />
      <Button count={initialCount} click={setInitialCount} />
      <Button count={initialCount} click={setInitialCount} />
      <Button count={initialCount} click={setInitialCount} />
    </div>
  );
}

export default App;
