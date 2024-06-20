import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import AllUser from "../Pages/Dashboard/AllUser";
import MyItems from "../Pages/Dashboard/MyItems";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/ItemDetails',
                element: <ItemDetails></ItemDetails>
            }
            
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard> 
            },
            {
                path: 'dashboard/myItems',
                element: <MyItems></MyItems>
            },
            {
                path: 'dashboard/allUser',
                element: <AllUser></AllUser>
            }
        ]
    }
   
    
]);

export default router;