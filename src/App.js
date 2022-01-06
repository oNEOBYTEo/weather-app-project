import "./styles.css";
import { useState } from "react";
import AdditionalInfo from "./components/AdditionalInfo";
import AxiosRequest from "./components/AxiosRequest";

export default function App() {
  const info = AxiosRequest();
  const [degrees, setDegrees] = useState(false);

  return (
    <div className="App">
      <h1>Weather App</h1>

      <h2>
        Location: {info?.name}
        <span> / {info?.sys.country}</span>
      </h2>
      <AdditionalInfo />
      <img
        alt="weather_image"
        src={`https://openweathermap.org/img/wn/${info?.weather[0].icon}@2x.png`}
      />
      <p className="temp">
        {!degrees
          ? Math.floor(info?.main.temp - 273.15)
          : Math.floor(((info?.main.temp - 273.15) * 9) / 5 + 32)}
        <span className="degrees">{!degrees ? "°C" : "°F"}</span>
      </p>
      <button onClick={() => setDegrees(!degrees)}>
        {!degrees ? "Fahrenheit" : "Celcius"}
      </button>
    </div>
  );
}
