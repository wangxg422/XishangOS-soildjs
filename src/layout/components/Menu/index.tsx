import { Route } from "@solidjs/router";
import type { Component } from "solid-js";

const App: Component = () => {
  const menuList = $signal([
    { name: "首页", path: "/" },
    { name: "系统主页", path: "/system" },
    { name: "用户管理", path: "/system/user" },
    { name: "角色管理", path: "/system/role" },
  ]);
  return (
    <>
      <For each={menuList}>
        {(menu, i) => (
          <div>
            <a href={menu.path}>{menu.name} : {menu.path}</a>
          </div>
        )}
      </For>
    </>
  );
};

export default App;
