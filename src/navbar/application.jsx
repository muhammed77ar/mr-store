import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";
import GlobalStyle from "./styledComponent/Globalstyle";

export default function App2(){
    return <div className="app">
        <Navbar />
        <Outlet />
        <GlobalStyle />
    </div>
}
