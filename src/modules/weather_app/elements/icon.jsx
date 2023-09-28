import { useEffect, useState } from "react";

import c01dIcon from "../weatherSVGicons/c01d.svg";
import c02dIcon from "../weatherSVGicons/c02d.svg";
import c03dIcon from "../weatherSVGicons/c03d.svg";
import c04dIcon from "../weatherSVGicons/c04d.svg";
import c50dIcon from "../weatherSVGicons/c50d.svg";
import placeHolderIcon from "../weatherSVGicons/placeholder.svg";



export default function WeatherIcon({ iconName }) {

    const iconGuide ={
        c01d: c01dIcon,
        c02d: c02dIcon,
        c03d: c03dIcon,
        c04d: c04dIcon,
        c50d: c50dIcon,
        placeHolder: placeHolderIcon
    }


    const [currentIcon, setCurrentIcon] = useState(iconGuide[iconName]);

   
    useEffect(()=>{
    
        setCurrentIcon(iconGuide[iconName])
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [iconName])
 

    return <img id="weather-icon" src={currentIcon} alt="Weather Icon" />;
}