import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/Slices/cartSlice";
import { formatCurrency } from "../../utils/helpers/helpers";
import Button from "../../ui/buttons/Button";
import { fetchAddress } from "../../services/apiGeocoding";
import { useNavigate } from "react-router-dom";

function CreateOreder1() {
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [priority, setPriority] = useState(false);
  const [position, setPosition] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice);
  const priorityPrice = totalPrice + totalPrice * 0.2;
  const navigate = useNavigate();

  const handleCustomer = (e) => {
    setCustomer(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.checked);
  };

  const handleFetchingAddress = ({ position, address }) => {
    setAddress(address);
    setPosition(`${position.latitude},${position.longitude}`);
  };

  const { mutate: createOrderApi, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => navigate(`/order/${data.data.id}`),
    onError: (error) => console.log(error),
  });

  const { mutate: fetchAddressApi, isPending: isfetchingAddress } = useMutation(
    {
      mutationFn: fetchAddress,
      onSuccess: (data) => handleFetchingAddress(data),
      onError: (error) => console.log(error),
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      cart: cart,
      customer,
      phone,
      address,
      priority,
      position,
    };
    createOrderApi(data);
  };
  return (
    <div className="p-8 flex flex-col gap-6">
      <h2 className="font-bold text-2xl">Ready to order? Let's go!</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="text-lg font-medium">First Name</label>
          <div className="my-2">
            <input
              type="text"
              name="customer"
              required
              value={customer}
              onChange={handleCustomer}
              className="h-12 w-full rounded-full pl-5 border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-none"
            />
          </div>
        </div>

        <div>
          <label className="text-lg font-medium">Phone number</label>
          <div className="my-2">
            <input
              type="tel"
              name="phone"
              required
              value={phone}
              onChange={handlePhone}
              className="h-12 w-full rounded-full pl-5 border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-none"
            />
          </div>
        </div>

        <div>
          <label className="text-lg font-medium">Address</label>
          <div className="my-2 relative">
            <input
              type="text"
              name="address"
              required
              value={address}
              onChange={handleAddress}
              className="h-12 w-full rounded-full pl-5 border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-none z-0"
            />
            {address ? (
              <></>
            ) : (
              <div className="absolute flex justify-center rounded-full h-10 w-40 bg-yellow-400 top-[4px] right-1 font-bold text-white hover:bg-yellow-300">
                <button type="button" onClick={fetchAddressApi}>
                  {isfetchingAddress ? "getting..." : "get location"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 items-center mb-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={priority}
            onChange={handlePriority}
            className=" h-8 w-5"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="flex gap-4">
          <div>
            {isPending ? (
              <Button btnName="PLACING ORDER..." size="w-48" />
            ) : (
              <Button btnName="ORDER NOW" size="w-36" type="submit" />
            )}
          </div>
          <span className="grid place-items-center text-lg font-bold">
            {priority
              ? formatCurrency(priorityPrice)
              : formatCurrency(totalPrice)}
          </span>
        </div>
      </form>
    </div>
  );
}

export default CreateOreder1;
