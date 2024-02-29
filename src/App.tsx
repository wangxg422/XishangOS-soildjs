import { createSignal, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  let name = $signal("lisi");

  return (
    <div>
        <input type="checkbox" class="toggle" checked />
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
