import { useEffect, useState } from "react";
import SelectLabels from "./elements/dropbox";
import getWeatherData from "./fecth";


export default function WeatherApp(){

    const [selectedCity, setSelectedCity] = useState({});

    useEffect(()=>{

        if(Object.keys(selectedCity).length === 0){
            return
        }

        async function doStuff(){
            let data = await getWeatherData(selectedCity);
            console.log(data)
        }
        doStuff();
        
    }, [selectedCity])

    return <div>
        <SelectLabels setSelectedCity = {setSelectedCity}/>
    </div>
}