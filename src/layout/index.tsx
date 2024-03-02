import type { Component } from "solid-js";
import LayoutClassic from "./LayoutClassic";
import LayoutVertical from "./LayoutVertical";
import LayoutTransverse from "./LayoutTransverse";
import LayoutColumns from "./LayoutColumns";

import { Switch, Match } from "solid-js";

const App: Component = () => {
  const layout: string = $signal("vertical");

  return (
    <>
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
    </>
  );
};

export default App;
