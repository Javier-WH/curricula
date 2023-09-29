import { useEffect, useState } from "react";

import "./iconsAnimations.css"

import GetIcon from "./getIcons";



export default function WeatherIcon({ iconName }) {




    const [currentIcon, setCurrentIcon] = useState("");


    useEffect(() => {

        setCurrentIcon("")

    }, [iconName])


    return <GetIcon code = "t05n"/>

   
    
}