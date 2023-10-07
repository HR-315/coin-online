import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import CoinsTable from "./pages/tablePage";
import getData from "./api"
import Detaile from "./pages/detaile";
import Login from "./pages/login";
const coins = await getData();
export default function App() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/list" element={<CoinsTable  coins={coins}/>} />
            <Route path="/list/:id" element={<Detaile/>} />
            <Route path="/login" element={<Login/>} />
            </Routes>

        </div>
    );
}   
