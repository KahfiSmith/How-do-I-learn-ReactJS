import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    title: "Li Shiya",
    price: "Rp 100.000",
    image: "images/lishiya.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium corporis illum ipsum, voluptatem perspiciatis laudantium maiores officia impedit eius ab itaque optio. Aperiam.`,
  },
  {
    id: 2,
    title: "Sakura",
    price: "Rp 100.000",
    image: "images/sakura.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium corporis illum ipsum, voluptatem perspiciatis laudantium maiores officia impedit eius ab itaque optio. Aperiam.`,
  },
  {
    id: 3,
    title: "Mikasa",
    price: "Rp 100.000",
    image: "images/mikasa.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium`,
  },
];

const email = localStorage.getItem('email');

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }
  return (
    <>
    <div className="flex justify-end items-center bg-blue-400 gap-6 text-white font-semibold p-5 text-xl">{email}<Button variant="bg-blue-600" className="pr-10" onClick={handleLogout}>Logout</Button>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-3/4 flex flex-wrap">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
      </div>
      <div className="w-1/4">

      </div>
    </div>
    <div className="flex justify-center mb-4">
      <Counter/>
    </div>
    </>
  );
};

export default ProductPage;
