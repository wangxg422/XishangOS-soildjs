import type { Component } from "solid-js"
import ClassicLayout from "./classic"

const App: Component = () => {
    const layout = $signal("classic")

    return (
      <>
      {layout}
      <Show when={layout === "classic"}>
        <ClassicLayout />
      </Show>
      </>
    );
};

export default App;