import axios from "axios";
import { useState, useEffect } from "react";

const AxiosRequest = () => {
  const [wheather, setwheather] = useState(null);

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d1e333d5623daac8f7e7b0314013eb92`
        )
        .then((res) => setwheather(res.data));
    };

    const handleError = () => {
      alert("ERROR, Location was not provided");
    };

    navigator.geolocation.getCurrentPosition(success, handleError);
  }, []);

  return wheather;
};

export default AxiosRequest;
