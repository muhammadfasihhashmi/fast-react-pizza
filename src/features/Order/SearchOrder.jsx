import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderID, setOrderID] = useState("");
  const navigate = useNavigate();
  function handleOrderID(e) {
    setOrderID(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${orderID}`);
    setOrderID("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <input
          className="border-2 border-slate-200  w-48 h-10 p-4 rounded-full  focus:outline-none bg-slate-50 placeholder:text-sm  shadow-inner"
          type="text"
          placeholder="Order ID..."
          value={orderID}
          onChange={handleOrderID}
        />
        <button className="absolute right-3 top-2">
          <Search size={25} color="gray" />
        </button>
      </form>
    </>
  );
}

export default SearchOrder;
