import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/lishiya.jpeg"/>
        <CardProduct.Body title="Li Shiya">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde
          repudiandae reprehenderit reiciendis incidunt aliquid nulla provident
          delectus culpa molestias totam iure nisi, voluptates, dicta autem qui
          dolorem cupiditate voluptatem.
        </CardProduct.Body>
        <CardProduct.Footer price="$100"/>
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="images/mikasa.jpeg"/>
        <CardProduct.Body title="Mikasa">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde
          repudiandae reprehenderit reiciendis incidunt aliquid nulla provident
          delectus culpa molestias totam iure nisi, voluptates, dicta autem qui
          dolorem cupiditate voluptatem.
        </CardProduct.Body>
        <CardProduct.Footer price="$150"/>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
