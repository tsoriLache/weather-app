import './App.scss';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

function App() {
  // const city = 'tel aviv';
  // const apiid = '0e267dbc74c50d22f43c08c4eabfe30c';
  // // eslint-disable-next-line no-unused-expressions
  // const x = async () => {
  //   console.log(
  //     await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiid}`
  //     )
  //   );
  // };
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <WeatherCard />
    </div>
  );
}

export default App;
