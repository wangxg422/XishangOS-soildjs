import type { Component } from "solid-js";
import LayoutClassic from "./LayoutClassic";
import LayoutVertical from "./LayoutVertical";
import LayoutTransverse from "./LayoutTransverse";
import LayoutColumns from "./LayoutColumns";
import { Switch, Match } from "solid-js";
import { Router } from "@solidjs/router";
import staticRouter from "../router/staticRouters";

const App: Component = () => {
  const layout: string = $signal("vertical");

  return (
    <>
      <Show when={layout === "full"}>
        <Router>{staticRouter}</Router>
      </Show>
      <Show when={layout !== "full"}>
        <Switch fallback={<LayoutVertical />}>
          <Match when={layout === "classic"}>
            <LayoutClassic />
          </Match>
          <Match when={layout === "vertical"}>
            <LayoutVertical />
          </Match>
          <Match when={layout === "transverse"}>
            <LayoutTransverse />
          </Match>
          <Match when={layout === "columns"}>
            <LayoutColumns />
          </Match>
        </Switch>
      </Show>
    </>
  );
};

export default App;
