import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";

import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import ProductDetails from "../pages/productDetails/productDetails";
import Dashboard from "../Dashboard/Dashboard";
import DashbordLayout from "../layout/Dashbord/DashbordLayout";
// import ListProduct from "../Dashboard/product/ListProduct";
// import EditProduct from "../Dashboard/product/EditProduct";
import AddProduct from "../Dashboard/product/AddProduct";
import ListProduct from "./../Dashboard/product/ListProduct";
import EditProduct from "./../Dashboard/product/EditProduct";
import AddCategory from "../Dashboard/category/AddCategory";
import EditCategory from "../Dashboard/category/EditCategory";
import ListCategory from "../Dashboard/category/ListCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <DashbordLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <EditProduct />,
      },
      {
        path: "/dashboard/list-product",
        element: <ListProduct />,
      },
      {
        path: "/dashboard/add-category",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/edit-category/:id",
        element: <EditCategory />,
      },
      {
        path: "/dashboard/list-category",
        element: <ListCategory />,
      },
    ],
  },
]);

export default router;
