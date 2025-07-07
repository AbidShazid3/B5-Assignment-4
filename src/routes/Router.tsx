import Main from "@/layout/MainLayout/Main";
import AddBook from "@/pages/AddBook/AddBook";
import AllBook from "@/pages/AllBooks/AllBook";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import Home from "@/pages/Home/Home";
import SingleBook from "@/pages/SingleBook/SingleBook";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { index: true, Component: Home },
            { path: '/books', Component: AllBook },
            { path: '/create-book', Component: AddBook },
            { path: '/borrow-summary', Component: BorrowSummary },
            { path: '/book/:id', Component: SingleBook },
        ]
    },
]);