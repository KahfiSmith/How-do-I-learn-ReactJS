import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "Li Shiya",
    price: 100000,
    image: "images/lishiya.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium corporis illum ipsum, voluptatem perspiciatis laudantium maiores officia impedit eius ab itaque optio. Aperiam.`,
  },
  {
    id: 2,
    title: "Sakura",
    price: 50000,
    image: "images/sakura.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium corporis illum ipsum, voluptatem perspiciatis laudantium maiores officia impedit eius ab itaque optio. Aperiam.`,
  },
  {
    id: 3,
    title: "Mikasa",
    price: 250000,
    image: "images/mikasa.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa culpa cum natus dicta commodi praesentium`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);


  const handleAddtoCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end items-center bg-blue-400 gap-6 text-white font-semibold p-5 text-xl">
        {email}
        <Button variant="bg-blue-600" className="pr-10" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddtoCart={handleAddtoCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 text-slate-600">
          <h1 className="text-xl font-semibold mb-2 text-blue-500 ml-5">
            Cart
          </h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-center mb-4">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductPage;
