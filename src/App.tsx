import type { Component } from "solid-js";
import { Navigate, Router } from "@solidjs/router";
import routes from "./router";
import routerGuard from "./router/guard";
import staticRoute from "./router/staticRouters";
import "./index.css";

const App: Component = () => {
  return (
    // <>
    //   <Router>{staticRoute}</Router>
    //   <Show when={routerGuard()} fallback={<Navigate href="/login" />}>
    //     <Router>{routes}</Router>
    //   </Show>
    // </>
    <>
      <Router>{[...staticRoute, ...routes]}</Router>
    </>
  );
};

export default App;
