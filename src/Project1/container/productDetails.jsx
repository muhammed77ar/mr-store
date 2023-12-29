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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="container mx-auto p-4 md:p-0 flex items-center justify-center h-full md: mt-32">
      {Object.keys(product).length === 0 ? (
        <div className=" mt-40 ">
        <div role="status">
          <svg aria-hidden="true" class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
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
