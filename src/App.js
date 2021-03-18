import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Foods from "./components/Foods/Foods";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import { FoodCategoryProvider } from "./FoodCategoryContext";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import SignIn from "./components/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <FoodCategoryProvider>
        <Switch>
          <Route exact path="/">
            <Banner />
            <FoodCategory />
            <Foods />
            <Services />
            <Footer />
          </Route>
          <Route path="/breakfast">
            <Banner />
            <FoodCategory />
            <Foods />
          </Route>
          <Route path="/soup">
            <Banner />
            <FoodCategory />
            <Foods />
          </Route>
          <Route path="/chicken">
            <Banner />
            <FoodCategory />
            <Foods />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/foods/foodDetails/:idFood">
            <FoodDetails />
          </Route>
        </Switch>
      </FoodCategoryProvider>
    </Router>
  );
}

export default App;
