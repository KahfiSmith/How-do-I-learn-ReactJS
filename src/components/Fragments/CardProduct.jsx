import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md mx-4 flex flex-col justify-between my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="p-8"><img src={image} alt="" className="rounded-lg" /></div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-8 pb-8 h-full">
      <h5 className="text-xl font-bold text-gray-600">{title}</h5>
      <p className="text-sm text-gray-700 tracking-wide">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id, handleAddtoCart } = props;
  return (
    <div className="flex justify-between px-8 pb-8 items-center">
      <span className="text-xl font-bold text-gray-700">Rp {price.toLocaleString("id-ID", {styles: "currency", currency: "IDR"})}</span>
      <Button variant="bg-blue-600" onClick={() => handleAddtoCart(id)}>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
