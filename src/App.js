import logo from './logo.svg';
import Header from "./Header/Header";
import About from './About/About';
import Companies from './Companies/Companies';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Companies/>
    </div>
  );
}

export default App;
