import type { Component } from "solid-js";

const App: Component = () => {
  const title = $signal("XishangOS")

  return (
    <>
      <div class="flex justify-start items-center h-14 pl-2">
        <div class="avatar">
          <div class="w-10 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="text-black ml-2">{title}</div>
      </div>
    </>
  );
};

export default App;
