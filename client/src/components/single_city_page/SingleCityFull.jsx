import React, { useEffect, useState } from "react";

const style = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const   SingleCity = ({city, setShowSingleCity}) => {

    // const cityData = JSON.parse(localStorage.getItem("Vilniusdata")) ?? "no data";
    // console.log(cityData);
    // const [data, setData] = useState(cityData);

    // console.log("data", data);
    console.log("data full", JSON.parse(localStorage.getItem("Vilniusdata")));



    function closeWindow() {
        setShowSingleCity(false)
    }
    
    return (
        <div className="city-wrapper" style={style}>
            <div>{city}</div>
            {/* <div>{data}</div> */}
            <button onClick={closeWindow}>Close</button>
        </div>
    )
}

export default SingleCity