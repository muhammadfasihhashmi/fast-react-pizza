import { useSelector } from "react-redux";
import CreateUser from "../features/User/CreateUser";
import { Link } from "react-router-dom";
import Button from "./buttons/Button";

function Home() {
  const userName = useSelector((store) => store.user.userName);
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/background.jpg)",
      }}
      className="h-[91.4vh] flex flex-col items-center gap-8 pt-16 bg-cover bg-no-repeat bg-center "
    >
      <div className="text-center text-3xl  font-semibold">
        <h1 className="text-slate-200">The best pizza.</h1>
        <h1 className=" text-yellow-500  ">
          Straight out of the oven, straight to you.
        </h1>
      </div>
      <div className="text-slate-100">
        👋 Welcome! Please start by telling us your name:
      </div>
      {userName ? (
        <Link to={"/menu"}>
          <Button btnName={`Continue Ordering `} size={"w-48"} />
        </Link>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
