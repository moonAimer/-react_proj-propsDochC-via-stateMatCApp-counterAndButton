import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [initialCount, setInitialCount] = useState(0);

  return (
    <div className="App">
      <Counter count={initialCount} />
      <Button
        click={() => {
          setInitialCount(initialCount + 1);
        }}
      />
      <Button
        click={() => {
          setInitialCount(initialCount + 1);
        }}
      />{" "}
      <Button
        click={() => {
          setInitialCount(initialCount + 1);
        }}
      />{" "}
      <Button
        click={() => {
          setInitialCount(initialCount + 1);
        }}
      />
    </div>
  );
}

export default App;
