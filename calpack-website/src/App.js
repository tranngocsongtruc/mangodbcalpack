import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; // Import your LandingPage component
import Academics from './Academics'; // Import Academics component
import Events from './Events'; // Import Events component
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route path="/academics" component={Academics} />
          <Route path="/events" component={Academics} />
        </Routes>
        {/* Add other routes as needed */}
      </div>
    </Router>
  );
}

export default App;
