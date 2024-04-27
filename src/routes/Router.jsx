import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import MyCraft from "../pages/MyCraft/MyCraft";
import NotFound from "../components/NotFound";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import UpdateProfile from "../pages/Authentication/UpdateProfile";
import ViewProfile from "../pages/Authentication/ViewProfile";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About/About";
import SecondaryCraft from "../pages/MyCraft/SecondaryCraft";
import AddCraft from "../pages/MyCraft/AddCraft";
import UpdateCraft from "../pages/MyCraft/UpdateCraft";
import ViewCraft from "../pages/ViewCraft/ViewCraft";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/allcrafts',
                element: <AllCrafts/>
            },
            {
                path: '/mycrafts',
                element: <PrivateRouter><MyCraft/></PrivateRouter>,
                // element:<MyCraft/>,
            },
            {
                path: '/about',
                element: <About/>,
            }
        ]
    },
    {
        path: '/authenticate',
        errorElement: <NotFound/>,
        element: <Login/>,
    },
    {
        path: '/authenticate/register',
        element: <Register/>,
        errorElement: <NotFound/>
    },
    {
        path: '/updateProfile',
        errorElement: <NotFound/>,
        element: <UpdateProfile/>,
    },
    {
        path: '/viewProfile',
        element: <ViewProfile/>,
        errorElement: <NotFound/>
    },
    {
        path: '/secondary',
        element: <SecondaryCraft/>,
        children: [
            {
                index: true,
                element: <AddCraft/>,
            },
            {
                path: '/secondary/update/:id',
                element: <UpdateCraft/>,
                loader: ({params})=>fetch(''),
            },
            {
                path: '/secondary/view/:id',
                element: <ViewCraft/>,
                loader: ({params})=>fetch(''),
            }
        ]
    }
])

export default router;