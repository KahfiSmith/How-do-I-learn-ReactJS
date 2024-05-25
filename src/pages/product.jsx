import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProduct } from "../services/product.service";
import { useLogin } from "../components/hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

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

  // useref
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    getProduct((data) => {
      setProduct(data);
    });
  }, []);

  const handleAddtoCartRef = (id) => {
    cartRef.current = [
      ...cartRef.current,
      {
        id,
        qty: 1,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  console.log(totalPriceRef);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="bg-background text-color min-h-screen">
        <div className="flex justify-end items-center bg-secondary gap-6 font-semibold p-5 text-xl">
          {username}
          <Button variant="bg-primary" className="pr-10" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="flex justify-center py-5">
          <div className="w-3/4 flex flex-wrap">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
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
          <div className="w-1/4">
            <h1 className="text-xl font-semibold mb-2 ml-5">Cart</h1>
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
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.id}>
                        <td>{product.title.substring(0, 10)}...</td>
                        <td>
                          ${" "}
                          {product.price.toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          ${" "}
                          {(product.price * item.qty).toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      {" "}
                      ${" "}
                      {totalPrice.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
