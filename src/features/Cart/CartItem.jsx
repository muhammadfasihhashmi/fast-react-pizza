import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers/helpers";
import {
  DecrementButton,
  IncrementButton,
  RemoveFromCartButton,
} from "../../ui/buttons/CartButtons";
import {
  decQuantity,
  incQuantity,
  removeFromCart,
} from "../../redux/Slices/cartSlice";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

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
    <li className="flex justify-between items-center font-semibold py-4 border-b-2 border-b-gray-300">
      <p>
        {quantity}&times; {name}
      </p>

      <div className="flex items-center gap-3 ">
        <div>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-center">
          <DecrementButton onClick={() => handleDecrement(id)} />
          <span className="font-semibold text-md w-8 text-center">
            {quantity}
          </span>
          <IncrementButton onClick={() => handleIncrerment(id)} />
        </div>
        <RemoveFromCartButton onClick={() => handleRemoveFromCart(id)} />
      </div>
    </li>
  );
}

export default CartItem;
