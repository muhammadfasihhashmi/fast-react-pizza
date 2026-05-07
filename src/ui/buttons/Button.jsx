function Button({
  btnName = "Button",
  type = "Button",
  onClick = () => {},
  size = "w-0",
}) {
  return (
    <button
      type={type}
      className={`h-14 ${size}  rounded-full bg-yellow-400 text-white font-bold self-center hover:bg-yellow-300 `}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
}
export default Button;
