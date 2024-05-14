import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header/>
                <CardProduct.Body/>
                <CardProduct.Footer/>
            </CardProduct>
        </div>
    )
};

export default ProductPage;
