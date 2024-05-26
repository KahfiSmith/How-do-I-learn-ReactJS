import { useSelector } from "react-redux";
import Button from "../Elements/Button";
import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    },[cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end items-center bg-secondary gap-6 font-semibold p-5 text-xl">
      {username}
      <Button variant="bg-primary" className="pr-10" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-primary py-2 px-4 rounded-md ml-1">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
