import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: 'terms',
                element: <Terms/>
            }
        ]
    },
    {
        path: "category",
        element: <Main/>,
        children:[
            {
                path: ':id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout/>,
        children: [
            {
                path:':id',
                element: <PrivateRoute><News/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;