function Button({ count, click }) {
  return (
    <button
      onClick={() => {
        click(count + 1);
      }}
    >
      Text
    </button>
  );
}

export default Button;
