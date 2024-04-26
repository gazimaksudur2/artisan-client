import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import MyCraft from "../pages/MyCraft/MyCraft";
import NotFound from "../components/NotFound";
import Login from "../pages/Authentication/Login";

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
                element: <MyCraft/>
            }
        ]
    },
    {
        path: '/authenticate',
        errorElement: <NotFound/>,
        element: <Login/>,
    }
])

export default router;