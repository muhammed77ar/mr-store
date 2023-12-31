import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <section className="h-screen flex justify-center items-center">...Loading</section>;
  }

  return (
    <section className="pt-32 pb-24 lg:py-40 max-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={product.image} className="max-w-[200px] lg:max-w-sm" alt={product.title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-medium text-2xl mb-2 max-w-[450px] mx-auto">{product.title}</h1>
            <div className="text-xl text-green-600 font-semibold mb-6">
              ${product.price.toFixed(2)}
            </div>
            <p className="mb-8">{product.description}</p>
            <button
              className="bg-black py-2 px-4 text-white rounded-md transition duration-300"
              onClick={() => addToCart(product, product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
