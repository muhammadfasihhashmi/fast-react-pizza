import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserName } from "../../redux/Slices/userSlice";
import Button from "../../ui/buttons/Button";

function CreateUser() {
  const enterNameRef = useRef(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(setUserName(name));
    navigate("/menu");
    setName("");
  };

  useEffect(() => {
    enterNameRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSumbit} className="flex flex-col gap-10">
        <input
          required
          className="border-2 border-none text-white h-12 w-80 rounded-full p-5 focus:outline-none focus:ring-4 ring-yellow-400 bg-transparent backdrop-blur-sm  placeholder:text-white"
          type="text"
          placeholder="your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={enterNameRef}
        />
        {name && (
          <Button
            btnName="START ORDERIND"
            size={"w-44"}
            type="submit"
            onClick={handleSumbit}
          />
        )}
      </form>
    </div>
  );
}

export default CreateUser;
