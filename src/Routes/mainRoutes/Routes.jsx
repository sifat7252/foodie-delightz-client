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
// import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import AddToCartPage from "../../pages/AddToCartPage/AddToCartPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Foods from "../../pages/Foods/Foods";
import DetailPage from "../../pages/DetailsPage/DetailPage";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/product')
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
            element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>
        },
        {
            path: '/updateProduct/:id',
            element: <PrivateRoute><UpdateProductPage></UpdateProductPage></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          
        },
        {
          path: '/brandProductPage/:brandName',
          element: <PrivateRoute><BrandProductPage></BrandProductPage></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/brand/${params.brandName}`)

        },
        // {
        //   path: '/detailsPage/:id',
        //   element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        //   // loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        //   loader: () => fetch ('http://localhost:5000/product')
        // },
        {
          path: '/addToCartPage',
          element: <PrivateRoute><AddToCartPage></AddToCartPage></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/myCart')
        },
        {
          path: '/foods',
          element: <Foods></Foods>
        },
        {
          path: '/detailPage/:id',
          element: <PrivateRoute><DetailPage></DetailPage></PrivateRoute>,
          loader: () => fetch ('http://localhost:5000/product')
        },

      ]
    },
  ]);



export default Routes;