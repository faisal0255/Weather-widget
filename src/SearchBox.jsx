import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ce093447e2ba402c80b76df05f93c227";
  let [city, setCity] = useState("");
  let [err, setError] = useState(false);

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleCityWeather = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <h4>Search by city name</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          className="city-field"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleCityWeather}
          // sx={{
          //   width: "300px",
          //   backgroundColor: "rgba(255, 255, 255, 0.05)", // Adds subtle background contrast
          //   "& .MuiInputLabel-root": { color: "#ccc" }, // Label color
          //   "& .MuiOutlinedInput-root": {
          //     "& fieldset": { borderColor: "#666" }, // Border color
          //     "&:hover fieldset": { borderColor: "#fff" },
          //     "& input": { color: "#fff" }, // Input text color
          //   },
          // }}

          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // White fill for the input
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
            },
          }}
          required
        />
        <Button className="search-button" variant="contained" type="submit" endIcon={<SearchIcon />}>
          Search
        </Button>

        {err && <p style={{ color: "red" }}>No Such place exist in API </p>}
      </form>
    </div>
  );
}
