import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ArticleCreate from "./components/ArticleCreate";
import Article from "./components/Article";
import "./styles/custom.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="container main-container">
            <Switch>
               
                <Route exact path="/Login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route path="/article/create" component={ArticleCreate} />
                <Route path="/article/:id" component={Article} />
            </Switch>
          </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
