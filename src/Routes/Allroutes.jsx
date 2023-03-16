import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Invoice from "../Pages/Invoice";
import { Login } from "../Pages/Login";
import Order from "../Pages/Order";
import Payment from "../Pages/Payment";
import { Register } from "../Pages/Signup";


export default function Allroutes(){
    const [token,setToken] = useState(localStorage.getItem("fundflo") ?? null);
    console.log(token)
   
    return (
        <Routes>
            <Route path="/" element={
                token ? <Order token={token} setToken={setToken} />  :  <Login token={token} setToken={setToken}/> 
            }/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/invoice' element={<Invoice/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )
}