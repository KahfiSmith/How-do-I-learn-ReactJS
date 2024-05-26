import CardProduct from "../components/Fragments/CardProduct";
import { useContext, useEffect, useState } from "react";
import { useLogin } from "../components/hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import { getProduct } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
  const {isDarkMode} = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, [])

  return (
    <>
      <div className="bg-primary text-color min-h-screen">
        <Navbar />
        <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
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
                    id={product.id}
                  />
                </CardProduct>
              ))}
          </div>
          <div className="w-1/4">
            <h1 className="text-xl font-semibold mb-2 ml-5">Cart</h1>
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
