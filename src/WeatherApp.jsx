import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

  const COLD_URL =
    "https://media.istockphoto.com/id/2155725480/photo/morning-bonfire-warmth.webp?a=1&b=1&s=612x612&w=0&k=20&c=O3hxdUb3tOOl30J3Digf5HzfDuQhW6mE0Fh-FxPgwn8=";

  const HOT_URL =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";

  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25,
    maxTemp: 27.08,
    minTemp: 27.7,
    feelsLike: 30,
    humidity: 52,
    weather: "Dusty",
  });

  const bgImage = weatherInfo.humidity > 80 ? RAIN_URL : weatherInfo.temp > 20 ? HOT_URL : COLD_URL

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="weatherapp"
    style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        transition: 'background-image 0.5s ease-in-out' // Smooth transition when image changes
      }}
    >
      <h1 className="weatherapp__title">Weather App &#9925;</h1>

      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
