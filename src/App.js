import logo from './logo.svg';
import './App.css';
import HeroSection from "./components/sections/HeroSection";
import Portfolio from './Portfolio';
import ProjectSection from "./components/sections/ProjectSection";

function App() {
  return (
    <div>
      <Portfolio />
      <HeroSection />
      <ProjectSection />
    </div>
    
  );
}

export default App;
