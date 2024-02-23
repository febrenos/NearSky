import { Header, SearchInput, WeatherCardList } from './components/index' 
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <body>
          <SearchInput />
          <WeatherCardList />
       </body>

      </div>
  );
}

export default App;
