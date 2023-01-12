function Button({ count, click }) {
  const myFn = () => {
    click(count + 1);
  };

  return <button onClick={myFn}>Text</button>;
}

export default Button;
