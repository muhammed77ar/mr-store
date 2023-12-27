import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./header";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4" key={id}>
        <Link to={`/product/${id}`} className="text-black no-underline">
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
            <div className="aspect-w-3 aspect-h-4">
              <img src={image} alt={title} className="object-contain w-full h-48" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700">${price}</p>
              <p className="text-gray-500">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-wrap">
    {renderList}
    </div>;
}
