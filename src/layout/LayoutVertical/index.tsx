import type { Component } from "solid-js";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Header from "../components/Header";

const App: Component = () => {
  return (
    <>
      <div class="layout">
        <div>
          <div
            class="aside-box"
            style="{ width: isCollapse ? '65px' : '210px' }"
          >
            <div class="logo flx-center">
              <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
              <span v-show="!isCollapse" class="logo-text">
                { "XishangOS" }
              </span>
            </div>
            <div>
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div>
          <Header></Header>
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
