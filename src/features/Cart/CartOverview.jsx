import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalItem, getTotalPrice } from "../../redux/Slices/cartSlice";

function CartOverview() {
  const totalPrice = useSelector(getTotalPrice);
  const totalItems = useSelector(getTotalItem);
  if (totalItems <= 0) return null;

  return (
    <div className="fixed bottom-0 w-[100vw] flex justify-between h-14 items-center text-black p-6 bg-yellow-300 opacity-80">
      <p className="flex gap-3">
        <span>{totalItems} pizzas</span>

        <span>${totalPrice}</span>
      </p>
      <Link to={"/cart"} className="flex gap-3">
        Open cart
        <ShoppingCart />
      </Link>
    </div>
  );
}

export default CartOverview;
