import './App.css';
import QuoteOfTheDay from './components/quotesApp';
import Magic8Ball from './components/magicBall';
import RandomNumberGenerator from './components/numberGenerator';
import TrafficLight from './components/trafficLight';
import TrafficLight2 from './components/TrafficLight2';

function App() {
  return (
    <>
      <div>
        <QuoteOfTheDay/>
      </div>
      <div>
        <Magic8Ball/>
      </div>
      <div>
        <RandomNumberGenerator/>
      </div>
      <div>
        <TrafficLight/>
      </div>
      <div>
        <TrafficLight2/>
      </div>
    </>
  );
}

export default App;
