import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // const INIT_URL =
  //   "https://images.unsplash.com/photo-1694097409943-5a8630747c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21va3klMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  // const COLD_URL =
  //   "https://media.istockphoto.com/id/2155725480/photo/morning-bonfire-warmth.webp?a=1&b=1&s=612x612&w=0&k=20&c=O3hxdUb3tOOl30J3Digf5HzfDuQhW6mE0Fh-FxPgwn8=";

  // const HOT_URL =
  //   "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";

  // const RAIN_URL =
  //   "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  return (
    <div className="InfoBox">
      <h3>Weather information</h3>
      <div className="cardContainer">
        <Card className="weather-card">
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 20
                    ? HOT_URL
                    : COLD_URL
              }
              alt="green iguana"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} 
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <p>Temperature = {info.temp}&deg;C &#127774;</p>
                <p>Max Temperature = {info.tempMax}&deg;C</p>
                <p>Min Temperature = {info.tempMin}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>
                  Weather is <b>{info.weather}</b> and it feels like{" "}
                  {info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
