import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers/helpers";
import {
  addToCart,
  decQuantity,
  getQuantityById,
  incQuantity,
  removeFromCart,
} from "../../redux/Slices/cartSlice";
import {
  AddToCartButton,
  DecrementButton,
  IncrementButton,
  RemoveFromCartButton,
} from "../../ui/buttons/CartButtons";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantityById(id));

  const isInCart = quantity > 0;

  function handleAddToCart() {
    const pizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
      ingredients,
      soldOut,
    };
    dispatch(addToCart(pizza));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  function handleIncrerment(id) {
    dispatch(incQuantity(id));
  }

  function handleDecrement(id) {
    dispatch(decQuantity(id));
  }

  return (
    <li className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-1 relative">
      <div className="flex gap-3 max-w-[550px]">
        <img
          src={imageUrl}
          alt="img"
          height={"170px"}
          width={"170px"}
          className={`rounded-lg ${soldOut ? "grayscale" : ""}`}
        />
        <div className="flex flex-col justify-around  max-w-[350px]">
          <div>
            <p className="font-bold text-xl">{name}</p>
            <p className="text-sm break-words">
              <i>{ingredients.join(", ")}</i>
            </p>
          </div>
          <div>
            {soldOut ? <p>sold out</p> : <p>{formatCurrency(unitPrice)}</p>}
          </div>
        </div>
      </div>
      {!soldOut && !isInCart && <AddToCartButton onClick={handleAddToCart} />}

      {isInCart && (
        <div className="flex items-center gap-5 absolute right-10 bottom-7">
          <div className="flex items-center justify-center">
            <DecrementButton onClick={() => handleDecrement(id)} />
            <span className="font-semibold text-md w-8 text-center">
              {quantity}
            </span>
            <IncrementButton onClick={() => handleIncrerment(id)} />
          </div>
          <RemoveFromCartButton onClick={() => handleRemoveFromCart(id)} />
        </div>
      )}
    </li>
  );
}

export default MenuItem;
