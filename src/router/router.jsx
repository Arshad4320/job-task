import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";

import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import ProductDetails from "../pages/productDetails/productDetails";
import Dashboard from "../Dashboard/Dashboard";
import DashbordLayout from "../layout/Dashbord/DashbordLayout";

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
      // {
      //   path: "/dashboard/order",
      //   element: <OrderList />,
      // },
      // {
      //   path: "/dashboard/add-category",
      //   element: <AddCategory />,
      // },
      // {
      //   path: "/dashboard/list-category",
      //   element: <ListCategory />,
      // },
      // {
      //   path: "/dashboard/edit-category/:id",
      //   element: <EditCategory />,
      // },
      // {
      //   path: "/dashboard/add-product",
      //   element: <AddProduct />,
      // },
      // {
      //   path: "/dashboard/list-product",
      //   element: <ListProduct />,
      // },
      // {
      //   path: "/dashboard/edit-product/:id",
      //   element: <EditProduct />,
      // },
      // {
      //   path: "/dashboard/add-blog",
      //   element: <AddBlog />,
      // },
      // {
      //   path: "/dashboard/edit-blog/:id",
      //   element: <EditBlog />,
      // },
      // {
      //   path: "/dashboard/blog-list",
      //   element: <BlogList />,
      // },
      // {
      //   path: "/dashboard/vidio-list",
      //   element: <VidioList />,
      // },
      // {
      //   path: "/dashboard/add-vidio",
      //   element: <AddVidio />,
      // },
      // {
      //   path: "/dashboard/edit-vidio/:id",
      //   element: <EditVidio />,
      // },
      // // {
      // //   path: "/dashboard/list-product",
      // //   element: <EditPro />,
      // // },
      // {
      //   path: "/dashboard/user/get-users",
      //   element: <UserList />,
      // },
    ],
  },
]);

export default router;
