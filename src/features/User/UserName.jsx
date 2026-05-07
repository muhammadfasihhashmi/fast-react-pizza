import { User } from "lucide-react";
import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((store) => store.user.userName);
  return (
    <div className="flex text-lg font-bold gap-2  ">
      <User />
      <p>{userName}</p>
    </div>
  );
}

export default UserName;
