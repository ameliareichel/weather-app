import './App.css';
import Footer from './Footer';
import Header from './Header';
import WeatherWindow from './WeatherWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <WeatherWindow />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
