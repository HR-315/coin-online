import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import CoinsTable from "./pages/tablePage";
import getData from "./api"
import Detaile from "./pages/detaile";
const coins = await getData();
export default function App() {
    return (
        <div>
            <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/list" element={<CoinsTable  coins={coins}/>} />
            <Route path="/list/:id" element={<Detaile/>} />
            </Routes>

        </div>
    );
}   
