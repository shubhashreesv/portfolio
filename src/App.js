import logo from './logo.svg';
import './App.css';
import HeroSection from "./components/sections/HeroSection";
import Portfolio from './Portfolio';
import ProjectSection from "./components/sections/ProjectSection";
import Ribbons from './components/ui/Ribbons';

function App() {
  return (
    <div>
      <Portfolio />
      <Ribbons/>
    </div>
  );
}

export default App;
