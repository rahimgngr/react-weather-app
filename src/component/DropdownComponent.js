import { useWeather } from "../context/WeatherContext";
import { useDrop } from "../context/DropdownContext";

function DropdownComponent() {
  const { setSelCity } = useDrop();
  const { cities } = useWeather();

  const handleChange = (e) => {
    setSelCity(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={handleChange}>
          {cities.map((city, index) => (
            <option key={city.id || index} selected={city.name === "Ankara"}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropdownComponent;
