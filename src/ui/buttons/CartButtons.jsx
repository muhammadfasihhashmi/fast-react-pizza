export function AddToCartButton({ onClick }) {
  return (
    <div
      className="grid items-center absolute right-10 bottom-7 bg-yellow-500 h-9 w-12 text-xl rounded-full hover:bg-yellow-400 hover:scale-110 transition ease-in-out delay-75 "
      aria-label="Add to cart"
    >
      <button onClick={onClick}>🛒</button>
    </div>
  );
}

export function RemoveFromCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-yellow-500 text-white text-xl w-12 h-9 rounded-full shadow-lg hover:bg-red-500 hover:scale-110 transition ease-in-out duration-200"
    >
      🗑️
    </button>
  );
}

export function IncrementButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-yellow-500 text-white text-lg w-6 h-8 rounded-full shadow-md hover:bg-yellow-400 hover:scale-110 transition ease-in-out duration-200"
    >
      +
    </button>
  );
}

export function DecrementButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-yellow-500 text-white text-lg w-6 h-8 rounded-full shadow-md hover:bg-yellow-400 hover:scale-110 transition ease-in-out duration-200"
    >
      -
    </button>
  );
}
