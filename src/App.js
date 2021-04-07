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
import { UserTypeProvider } from "./UserTypeContext";
import { LoggedInUserProvider } from "./LoggedInUserContext";
import CheckOut from "./components/CheckOut/CheckOut";
import Cart from "./components/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <LoggedInUserProvider>
        <UserTypeProvider>
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
              <Route path="/login">
                <SignIn />
              </Route>
              <PrivateRoute path="/cart">
                <Cart/>
              </PrivateRoute>
              <PrivateRoute path="/foods/foodDetails/:idFood">
                <FoodDetails />
              </PrivateRoute>
            </Switch>
          </FoodCategoryProvider>
        </UserTypeProvider>
      </LoggedInUserProvider>
    </Router>
  );
}

export default App;
