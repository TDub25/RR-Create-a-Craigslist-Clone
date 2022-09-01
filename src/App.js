// Import data
import Gallery from './Gallery'

function App(){
  return (
    <Gallery />
  )
}

// Import components
import './App.css';
import { Gallery } from './gallery.js'

function App(){
  return (
    <div>
      <Gallery />
      <div className="App">
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
