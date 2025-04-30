import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";
import ProductPage from "../pages/ProductPage";
import VoucherDetailPage from "../pages/VoucherDetailPage";
import VoucherPage from "../pages/VoucherPage";
import SalePage from "../pages/SalePage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/voucher",
                element: <VoucherPage />,
            },
            {
                path: "/voucher/:id",
                element: <VoucherDetailPage />,
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
                path: "/product/create",
                element: <ProductCreatePage />,
            },
            {
                path: "/product/edit/:id",
                element: <ProductEditPage />,
            },
            {
                path: "/sale",
                element: <SalePage />,
            },
            {
                path: "/voucher/detail/:id",
                element: <VoucherDetailPage  />,
            },
        ],
    }
 ])
 export default router