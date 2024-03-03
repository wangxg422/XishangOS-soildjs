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
      <div class="layout">
        <div class="sidebar">
          <div class="logo" style="{ width: isCollapse ? '65px' : '210px' }">
            <div class="logo flx-center">
              <img class="logo-img" src="@/assets/images/logo.png" alt="logo" />
              <span v-show="!isCollapse" class="logo-text">
                {"XishangOS"}
              </span>
            </div>
            <div>
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Header></Header>
          </div>
          <div>
            <Router>{routes}</Router>
            {/* <Router>
              <Route path="/system/user" component={SysUser}></Route>
              <Route path="/system/role" component={SysRole}></Route>
            </Router> */}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
