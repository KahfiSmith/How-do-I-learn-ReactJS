import { useSelector } from "react-redux";
import Button from "../Elements/Button";
import { useLogin } from "../hooks/useLogin";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end items-center bg-secondary gap-6 font-semibold p-5 text-xl">
      {username}
      <div className="flex items-center bg-primary py-2 px-4 rounded-md ml-1">
        <span className="mr-6">Item: {totalCart}</span><span className="mr-6">|</span>  Price: ${total}
      </div>
      <Button variant="bg-primary" className="pr-10" onClick={handleLogout}>
        Logout
      </Button>
      <Button
        className="right-4 top-4 py-2 w-16 text-color rounded" variant="bg-primary"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
