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
import Footer from './components/Footer/Footer';
import { FoodCategoryProvider } from './FoodCategoryContext';
import FoodCategory from './components/FoodCategory/FoodCategory';
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (
    <Router>
      <Header />
      <FoodCategoryProvider>
        <FoodCategory />
        <Switch>
          <Route exact path="/">
            <Foods/>
            <Services/>
            <Footer/>
          </Route>
          <Route path="/breakfast">
            <Foods />
          </Route>
          <Route path="/soup">
            <Foods />
          </Route>
          <Route path="/chicken">
            <Foods />
          </Route>
          <Route path="/foods/foodDetails/:idFood">
            <FoodDetails/>
          </Route>
        </Switch>
      </FoodCategoryProvider>
    </Router>
  );
}

export default App;
