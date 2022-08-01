import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
