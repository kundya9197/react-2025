import React, { useState } from "react";

function Hook1(){
    const [car, setCar] = useState({
        model:"mustang",
        year: 2021,
        company: "ford"
    })
    return(
        <>
        <h1>This is {car.model} made in {car.year}</h1>
        </>
    )
}
export default Hook1