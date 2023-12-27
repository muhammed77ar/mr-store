import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import UserTable from "./userTable";
import UserAdd from "./userAdd";
import UserEdit from "./userEdit";

export default function Navbar(){
    return <>
        <BrowserRouter>
            <ul class="nav justify-content-center">
                <li class="nav-item me-4">
                    <Link to={"/"}>ADD TABLE</Link>
                </li>
                <li class="nav-item">
                    <Link to={"/user/add"}>ADD ADD</Link>
                </li>
            </ul>
            <Routes>
                <Route index element={<UserTable />} />
                <Route path="/user/add" element={<UserAdd />} />
                <Route path="/user/:id/edit" element={<UserEdit />} />
            </Routes>
        </BrowserRouter>
        <Outlet />
    </>
}