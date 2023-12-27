import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct, removeSelectProduct } from "../redux/actions/ProductAction";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectProduct());
    };
  }, [productId]);

  return (
    <div className="container mx-auto p-4 md:p-0 flex items-center justify-center h-full md: mt-32">
      {Object.keys(product).length === 0 ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-56 h-56 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
            <div className="px-4 py-2 text-lg font-medium leading-none text-center text-blue-800 dark:text-blue-200">
              Loading...
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="flex flex-col items-center md:flex-row shadow-md rounded-md">
            <div className="mb-4 md:mr-4 w-full md:w-1/2 rounded-xl bg-white text-gray-700">
              <img
                src={product.image}
                alt={product.title}
                className="h-64 md:h-96 w-full object-contain"
              />
            </div>
            <div className="p-6 w-full md:w-1/2">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-orange-700 antialiased text-center md:text-left">
                {product.category}
              </h6>
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center md:text-left">
                {product.title}
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-center md:text-left">
                {product.description}
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-center">
                <span className="text-3xl font-bold mb-2.5 md:mt-0 md:mr-5 text-center md:text-left text-gray-900 dark:text-white block">${product.price}</span>
                <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <span className="font-bold">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
