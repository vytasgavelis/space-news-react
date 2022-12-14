import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomArticleButton from "./RandomArticleButton";
import Header from "./Header";
import Login from "./routes/Login";
import News from "./routes/News";
import Root from "./Root";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "login/",
        element: <Login />,
    },
    {
        path: "news/",
        element: <News />,
    },
]);

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
