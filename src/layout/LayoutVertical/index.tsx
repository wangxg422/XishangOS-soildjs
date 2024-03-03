import type { Component } from "solid-js";
import Menu from "../components/Menu";
import Header from "../components/Header";
import "./index.scss";
import Footer from "../components/Footer";
import { Router } from "@solidjs/router";
import routes from "../../router";

const App: Component = () => {
  return (
    <>
      <div class="container">
        <div class="sidebar">
          <div class="logo-details">
            <img
              class="logo-img"
              src="@/assets/images/logo.svg"
              alt="logo"
            />
            <span class="logo-text">{"XishangOS"}</span>
            <div class="menu">
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div class="header">
          <Header></Header>
        </div>
        <div class="content">
          <Router>{routes}</Router>
        </div>
        <div class="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
