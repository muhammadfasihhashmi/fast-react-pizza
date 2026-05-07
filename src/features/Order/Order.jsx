import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder, updateOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers/helpers";
import Loader from "../../ui/Loader";
import ApiError from "../../ui/ApiError";
import OrderItem from "./OrderItem";

function Order() {
  const { orderID } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["orderDetails"],
    queryFn: () => getOrder(orderID),
  });

  const { mutate: updateOrderApi, isPending } = useMutation({
    mutationFn: updateOrder,
    onSuccess: () => queryClient.invalidateQueries(["orderDetails"]),
  });

  if (isLoading) return <Loader />;
  if (isError) return <ApiError error={error.message} />;
  if (isPending) return <Loader />;
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = data;
  console.log(priority);

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="p-6 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order #{id} Status</h2>

        <div className="flex gap-5">
          {priority && (
            <span className="border-2 bg-red-500 p-2 rounded-full text-white">
              Priority order
            </span>
          )}
          <span className="border-2 bg-green-500 p-2 rounded-full text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between rounded-2xl py-8 px-3 bg-gray-200">
        <p className="text-lg font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm font-semibold">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="border-t-2">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex flex-col rounded-2xl py-8 px-3 bg-gray-200 gap-2">
        <p className="font-bold">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="font-bold">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-xl font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && (
        <button
          onClick={() => updateOrderApi({ id, updateObj: { priority: true } })}
          className="h-13 rounded-full p-3 font-bold bg-yellow-400 text-gray-700 self-start hover:bg-yellow-300"
        >
          give Priority
        </button>
      )}
    </div>
  );
}

export default Order;
