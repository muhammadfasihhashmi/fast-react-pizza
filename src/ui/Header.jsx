import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchOrder from "../features/Order/SearchOrder";
import UserName from "../features/User/UserName";

function Header() {
  const userName = useSelector((store) => store.user.userName);
  return (
    <header className="flex justify-between items-center p-6 bg-yellow-500 h-16 w-full z-50 fixed ">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="assets/images/logo.png" alt="logo" width="50px" />
        <h1 className="text-lg font-semibold tracking-widest">
          Fast React Pizza
        </h1>
      </Link>
      <div className="flex justify-center items-center gap-5">
        <SearchOrder />
        {userName && <UserName />}
      </div>
    </header>
  );
}

export default Header;
