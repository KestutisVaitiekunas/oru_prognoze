import { useState, useEffect , useRef} from "react";
import Axios from "axios";



const SingleCitySmall = (props) => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("Vilniusdata")) ?? "no data");

    const today = new Date().getDate(); 

    // let day = data.forecastTimestamps.match(`/\d{4}-0?\d{2}-0?${today} 12:00:00/`);
    // console.log(day);

    const forecast_values =[];
    // const year = new Date().getFullYear();
    // const month = new Date().getMonth();
    // const hour = new Date().setHours(12, 0, 0, 0);
    // console.log(today);
    

    // console.log(srcString);

    for (let f of data.forecastTimestamps) {
        let datastring = f.forecastTimeUtc.match(`/\d{4}-0?\d+-0?${today} 12:00:00/`);
        console.log(datastring);
            forecast_values.push(f)
        }
    

    console.log("data",forecast_values);

    useEffect(() => {

        const fetchData = async () => {
            console.log("fetching data");
            try {
                console.log("fetching data");
                const cityData = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/${props.city}/forecasts/long-term`);
                if (cityData) {
                    let cdata = await cityData.json();
                    setData(cdata) 
                    // console.log(data.forecastTimestamps)
                    localStorage.setItem("Vilniusdata", JSON.stringify(data))
                    console.log( JSON.parse(localStorage.getItem("Vilniusdata"))) 
                } else {
                    console.log("no data")
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
        
    },[])


    return (
        <div className="city-wrapper-small">
            {/* <p>{data.forecastTimestamps}</p> */}
            {props.city}
        </div>
    )
}

export default SingleCitySmall