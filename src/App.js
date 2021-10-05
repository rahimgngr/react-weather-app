import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import { DropdownProvider } from "./context/DropdownContext";
import WeatherComponent from "./component/WeatherComponent";
import DropdownComponent from "./component/DropdownComponent";

function App() {
  return (
    <WeatherProvider>
      <DropdownProvider>
        <WeatherComponent />
        <DropdownComponent />
      </DropdownProvider>
    </WeatherProvider>
  );
}

export default App;
