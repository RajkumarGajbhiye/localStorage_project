import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";

const routes = [
    {
        path:"/",
        element:<SignUp/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/home",
        element:<Home/>,
    },
    {
        path:"/user",
        element:<User/>,
    }
]

export default routes;