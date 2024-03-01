import type { Component } from "solid-js";
import { Router } from "@solidjs/router";
import routes from "../../router";
import { Toaster } from "solid-toast";
import Main from "../main";
import Header from "../header";
import SideBar from "../sidebar";
import Footer from "../footer";

const App: Component = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <Toaster />
      <Router root={Main}>{routes}</Router>
    </>
  );
};

export default App;
