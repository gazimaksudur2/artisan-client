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
import Loader from "../components/Loader";
import Spinner from "../components/Spinner";
import CategoryPage from "../pages/Category/CategoryPage";
import Exhibition from "../pages/Exhibition/Exhibition";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: ()=>fetch('roughData.json'),
            },
            {
                path: '/allcrafts',
                element: <AllCrafts/>,
                loader: ()=> fetch(`http://localhost:5000/crafts`),
            },
            {
                path: '/mycrafts',
                element: <PrivateRouter><MyCraft/></PrivateRouter>,
            },
            {
                path: '/exhibition',
                element: <Exhibition/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: 'loading2',
                element: <Spinner/>
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
        path: '/loading',
        element: <Loader/>,
    },
    {
        path: '/secondary',
        element: <SecondaryCraft/>,
        children: [
            {
                index: true,
                element: <PrivateRouter><AddCraft/></PrivateRouter>,
            },
            {
                path: '/secondary/update/:id',
                element: <UpdateCraft/>,
                loader: ({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
            },
            {
                path: '/secondary/view/:id',
                element: <ViewCraft/>,
                loader: ({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
            },
            {
                path: '/secondary/category/:name',
                element: <CategoryPage/>,
                loader: ({params})=>fetch(`http://localhost:5000/crafts/subcategory/${params.name}`),
            }
        ]
    }
])

export default router;