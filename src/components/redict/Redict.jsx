import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function RedictWhenLoading(){
    const navigate=useNavigate()
    useEffect(()=>{
         navigate('/contacts')
    })
   
    return(
        <div>Redicting....</div>
    )
}
export default RedictWhenLoading