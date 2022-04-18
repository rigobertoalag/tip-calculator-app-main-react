import './main.scss'

import Bills from './components/Bills';
import Totals from './components/Totals';

function App() {
  return (
    <div className="main">
      <div className="app-title">
        <p>S P L I </p>
        <p>T T E R </p>
      </div>

      <div className="app-container">
        <Bills />
        <Totals />
      </div>
      
    </div>
  );
}

export default App;
