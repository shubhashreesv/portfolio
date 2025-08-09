import './App.css';
import Portfolio from './Portfolio';
import Ribbons from './components/ui/Ribbons';
import TargetCursor from './components/ui/TargetCursor';
import Particles from './components/ui/Particles'; 

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Global particle background */}
      <Particles 
        className="fixed inset-0 -z-10 w-full h-full"
        particleCount={300} 
        particleColors={["#00ffff", "#00ffea", "#0055ff"]}
        // pass any other props you want here
      />

      {/* Main content above the particles */}
      <div className="relative z-10">
        <Portfolio />
        <Ribbons />
        <TargetCursor targetSelector=".cursor-target" spinDuration={2} />
      </div>
    </div>
  );
}

export default App;
