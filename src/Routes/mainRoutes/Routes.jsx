import {
    createBrowserRouter
    
  } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AddProductPage from "../../pages/AddProductPage/AddProductPage";
import UpdateProductPage from "../../pages/UpdateProductPage/UpdateProductPage"
import BrandProductPage from "../../pages/BrandProductPage/BrandProductPage";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addProduct',
            element: <AddProductPage></AddProductPage>
        },
        {
            path: '/updateProduct',
            element: <UpdateProductPage></UpdateProductPage>
        },
        {
          path: '/brandProductPage/:id',
          element: <BrandProductPage></BrandProductPage>
        }
      ]
    },
  ]);



export default Routes;