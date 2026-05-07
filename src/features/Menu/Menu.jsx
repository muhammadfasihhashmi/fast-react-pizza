import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiRestaurant";
import Loader from "../../ui/Loader";
import ApiError from "../../ui/ApiError";
import MenuItem from "./MenuItem";
import CartOverview from "../Cart/CartOverview";

function Menu() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ApiError error={error} />;
  return (
    <>
      <div className="flex justify-center  w-[99vw] ">
        <div className=" w-[90vw]  m-5">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-6 ">
            {data.data.map((pizza) => (
              <MenuItem pizza={pizza} key={pizza.id} />
            ))}
          </ul>
        </div>
      </div>
      <CartOverview />
    </>
  );
}

export default Menu;
