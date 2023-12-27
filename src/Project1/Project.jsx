import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Header from "./container/header";
import ProductListing from "./container/productListing";
import ProductDetails from "./container/productDetails";

export default function Project() {
  return <>
      <BrowserRouter>
        <div className="app">
          <Header />
        </div>
        <Routes>
          <Route path={"/"} exact element={<ProductListing />} />
          <Route path={"/product/:productId"}  element={<ProductDetails />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>

}
