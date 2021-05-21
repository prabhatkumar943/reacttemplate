import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
