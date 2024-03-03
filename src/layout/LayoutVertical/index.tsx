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
          <div class="logo-details" style="{ width: isCollapse ? '65px' : '210px' }">
            <div class="">
              <img class="" src="@/assets/images/logo.png" alt="logo" />
              <span v-show="!isCollapse" class="logo-name">
                {"XishangOS"}
              </span>
            </div>
            <div>
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div class="right">
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
      </div>
    </>
  );
};

export default App;
