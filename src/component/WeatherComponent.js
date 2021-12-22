import { useEffect, useState } from "react";
import { useDrop } from "../context/DropdownContext";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import axios from "axios";

function WeatherComponent() {
  const { selCity } = useDrop();

  const [weat, setWeat] = useState({
    coord: { lat: "39.92077", lon: "32.85411" },
    name: "Ankara",
  });

  const key = "YOUR_KEY_HERE";

  useEffect(() => {
    sendGetRequest();
  }, [selCity]);

  const sendGetRequest = async () => {
    try {
      await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${selCity}&appid=${key} `
      ).then((res) => setWeat(res.data));
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: `${key}`,
    lat: `${weat.coord.lat}`,
    lon: `${weat.coord.lon}`,
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  return (
    <div>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={weat.name}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
}

export default WeatherComponent;
