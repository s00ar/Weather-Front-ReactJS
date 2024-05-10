import "./styles/App.scss";
import AppRoutes from "./routes/Routes.jsx"; 
import { useSelector } from "react-redux";

function App() {
  const weatherData = useSelector((state) => state.weather.data);
  let backgroundImage;

  if (weatherData) {
    const weatherType = weatherData.weather[0].main.toLowerCase();
    backgroundImage = `url('/backgrounds/${weatherType}.png')`;
  } else {
    backgroundImage = "url('/backgrounds/default.jpg')";
  }

  return (
    <div className="app" style={{ backgroundImage }}>
      <AppRoutes />
    </div>
  );
}

export default App;
