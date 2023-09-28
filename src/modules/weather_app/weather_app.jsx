import { useEffect, useState } from "react";
import SelectLabels from "./elements/dropbox";
import getWeatherData from "./fecth";
import WeatherIcon from "./elements/icon";

import "./weather_app.css";


export default function WeatherApp(){

    const [selectedCity, setSelectedCity] = useState({});
    const [iconName, setIconName] = useState("");
    const [iconText, setIconText] = useState("");
    const [temp, setTemp] = useState("");
    const [cityName, setCityName] = useState("");
    const [datetime, setDatetime] = useState("");

    useEffect(()=>{

        if(Object.keys(selectedCity).length === 0){
            setIconName("placeHolder");
            return
        }

        async function doStuff(){
            let data = await getWeatherData(selectedCity);
            if(data.error){
                alert("ha ocurrido un error al comunicarse con la api")
                return
            }


            let icon = data.weather.icon;
            let icoText = data.weather.description;

            let temperature = data.temp;
            let _cityName = data.city_name;
            let _datetime = data.datetime;

            setIconName(icon);
            setIconText(icoText);
            setTemp(temperature);
            setCityName(_cityName);
            setDatetime(_datetime);
            console.log(data)
        }
        doStuff();
        
    }, [selectedCity])

    return <div>
        <SelectLabels setSelectedCity = {setSelectedCity}/>
        <div id="weather-icon-main-container">
            <div id="weater-icon-contaainer">
                <WeatherIcon iconName = {iconName}/>
                <span>{iconText}</span>
            </div>
            <span id="temperature">{`${temp}°C`}</span>
            <div id="weather-icon-text-container">
                <span>{cityName}</span>
                <span>{datetime}</span>
            </div>
        </div>
      
    </div>
}