import type { Component } from "solid-js";
import { Router } from "@solidjs/router";
import routes from "../../router";
// import { Toaster } from "solid-toast";
import Main from "../components/Main";
import Header from "../components/Header";
import SideBar from "../components/Menu";
import Footer from "../components/Footer";
import Logo from "../logo";

const App: Component = () => {
  return (
    <>
      <div class="bg-white h-14 border-b-4 border-indigo-100">
        <div class="w-40">
          <Logo />
        </div>
        <Header />
      </div>
      <div class="flex justify-between">
        <div class="w-40 bg-blue-500 h-dvh">
          <SideBar />
        </div>
        <div class="">
          <div class="">
          <Router root={Main}>{routes}</Router>
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
