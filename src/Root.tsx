import {RouterProvider} from "react-router-dom";
import React from "react";
import RandomArticleButton from "./RandomArticleButton";
import Header from "./Header";

export default function Root() {
    return (
        <div className="App">
            <Header></Header>
            <RandomArticleButton/>
        </div>
    );
}