import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddService from "../pages/AddService";
import ManageServices from "../pages/ManageServices";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import AllServices from "../pages/AllServices";

const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/registration',
            element: <Register />,
          },
          {
            path:'/add-service',
            element:<AddService></AddService>,
          },
          {
            path:'/manage-services',
            element:<ManageServices></ManageServices>,
          },
          {
            path:'/booked-services',
            element:<BookedServices></BookedServices>,
          },
          {
            path:'/service-to-do',
            element:<ServiceToDo></ServiceToDo>,
          },
          {
            path:'/all-services',
            element:<AllServices></AllServices>,
          },
    ]
}
])
export default router