import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import "./styles/config.css";
import "./styles/variables.css";

import {router} from "./routes/routes";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);






