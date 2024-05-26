import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-secondary border border-gray-600 rounded-lg shadow-md mx-4 flex flex-col justify-between my-2 text-white mb-6">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
      <Link to={`/product/${id}`}>
        <img src={image} alt="" className="p-8 rounded-lg h-64 w-full object-cover" />
      </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-8 pb-8 h-full">
      <h5 className="text-xl font-bold">{title.substring(0, 18)}...</h5>
      <p className="text-sm tracking-wide">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-8 pb-8 items-center">
      <span className="text-xl font-bold">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-primary" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
