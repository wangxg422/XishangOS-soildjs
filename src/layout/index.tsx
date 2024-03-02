import type { Component } from "solid-js"
import ClassicLayout from "./LayoutClassic"

const App: Component = () => {
    const layout = $signal("classic")

    return (
      <>
      <Show when={layout === "classic"}>
        <ClassicLayout />
      </Show>
      </>
    );
};

export default App;