import Footer from '../footer/Footer';
import Header from '../header/Header';
import SingleCity from '../single_city_page/SingleCityFull';
import SingleCitySmall from '../single_city_page/SingleCitySmall';
import { useState, useEffect , useRef} from "react";


const HomePage = () => {

    const [showSingleCity, setShowSingleCity] = useState(false);


    return (
        <div>
            <Header />
            <div>
                <h1>HomePage</h1>
                <div  >
                    <div onClick={() => setShowSingleCity(true)}>
                        <SingleCitySmall city="vilnius" />
                    </div>
                    {showSingleCity && <SingleCity  city = "vilnius" setShowSingleCity={setShowSingleCity}/> }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage