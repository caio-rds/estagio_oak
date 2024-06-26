import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Consult from "./components/consult";
import HomePage from "./components/home";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />}/>
                <Route path="/products" element={<Consult />}/>
            </Routes>
        </BrowserRouter>
    );
}
