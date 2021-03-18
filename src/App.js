import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foods from './components/Foods/Foods';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <Header />
      <Foods />
      <Services />
    </Router>
  );
}

export default App;
