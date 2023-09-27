import { useState } from "react";
import axios from "axios";


function ClickButton()
{
    const [clicks, setWeather] = useState('')

    async function HandleClick()
    {
        let data = (await axios.get("http://localhost:5176/WeatherForecast")).data.toString()
        setWeather(data)
        
    }
    return(
        <div>
            <button onClick={HandleClick} >Press me</button>
            <div>{clicks}</div>
        </div>
    )
};

export default ClickButton;