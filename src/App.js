import WeatherCard from "./components/weatherCard";

function App() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/weather.jpg)` }}
    >
      <WeatherCard />
    </div>
  );
}

export default App;
