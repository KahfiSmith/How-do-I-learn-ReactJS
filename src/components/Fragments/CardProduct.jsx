import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-secondary border border-gray-600 rounded-lg shadow-md mx-4 flex flex-col justify-between my-2 text-white">
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
      <h5 className="text-xl font-bold">{title}</h5>
      <p className="text-sm tracking-wide">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id, handleAddtoCart } = props;
  return (
    <div className="flex justify-between px-8 pb-8 items-center">
      <span className="text-xl font-bold">Rp {price.toLocaleString("id-ID", {styles: "currency", currency: "IDR"})}</span>
      <Button variant="bg-primary" onClick={() => handleAddtoCart(id)}>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
