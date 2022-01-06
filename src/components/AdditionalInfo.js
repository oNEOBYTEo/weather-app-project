import AxiosRequest from "./AxiosRequest";
import React from "react";

const AdditionalInfo = () => {
  const info = AxiosRequest();

  return (
    <>
      <p className="addinfo_humidity">
        <b>Humidity:</b> <span>{info?.main.humidity} %</span>
      </p>
      <p className="addinfo_description">
        <b> Description:</b>
        <span className="description"> {info?.weather[0].description}</span>
      </p>
      <p className="addinfo_speed">
        <b>Wind Speed:</b> <span> {info?.wind.speed}</span> m/s
      </p>
    </>
  );
};

export default AdditionalInfo;
