import type { Component } from "solid-js";
import { Switch, Match } from "solid-js";
import { Router } from "@solidjs/router";
import staticRouter from "../router/staticRouters";

const App: Component = () => {
  const layout: string = $signal("vertical");

  return (
    <>
    </>
  );
};

export default App;
