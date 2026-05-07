import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="p-4">
      <div className="flex gap-2 font-bold  hover:text-yellow-400">
        <ArrowBigLeft />
        <Link to="/menu"> Back to menu</Link>
      </div>

      <p className="grid place-items-center mt-32 font-extrabold text-xl animate-bounce">
        Your cart is still empty, Start adding some pizzas😋
      </p>
    </div>
  );
}

export default EmptyCart;
