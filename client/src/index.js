import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import BreedDetails from "./details/BreedDetails";
import Home from "./home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/breed/:breedId",
        element: <BreedDetails />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
