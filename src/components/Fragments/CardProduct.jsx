import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <a href="#">
      <img src="/images/lishiya.jpeg" alt="" className="p-8 rounded-lg" />
    </a>
  );
};

const Body = () => {
  return (
    <div className="px-8 pb-8">
      <h5 className="text-xl font-semibold text-gray-700">Li Shiya</h5>
      <p className="text-sm text-gray-700 tracking-wide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        assumenda perspiciatis possimus fugiat cupiditate a blanditiis veniam,
        hic non earum inventore necessitatibus beatae omnis minus laborum
        dignissimos explicabo vitae!
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-between px-8 pb-8 items-center">
      <span className="text-xl font-bold text-gray-700">Rp 100.000,00</span>
      <Button variant="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
