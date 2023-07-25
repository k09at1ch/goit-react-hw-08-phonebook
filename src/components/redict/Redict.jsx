import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function RedictWhenLoading(){
    const navigate=useNavigate()
    useEffect(()=>{
         navigate('/login')
    })
   
    return(
        <div>Redicting....</div>
    )
}
export default RedictWhenLoading