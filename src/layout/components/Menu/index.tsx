import { Route } from "@solidjs/router";
import type { Component } from "solid-js";
import { Menu } from "./interface";

const App: Component = () => {
  const menuList: Menu[] = $signal([
    { name: "首页", path: "/" },
    { name: "系统主页", path: "/system" },
    { name: "用户管理", path: "/system/user" },
    { name: "角色管理", path: "/system/role" },
  ]);

  function renderMenu(menu: Menu): any {
    if (!menu) {
      return;
    }
    if (menu.children && menu.children.length !== 0) {
      return (
        <>
          <summary>{menu.name}</summary>
          <ul>
            <For each={menu.children}>{(m, i) => renderMenu(m)}</For>
          </ul>
        </>
      );
    }
    if (!menu.children || menu.children.length === 0) {
      return (
        <li>
          <a href={menu.path}>{menu.name}</a>
        </li>
      );
    }
  }

  return (
    <>
      <For each={menuList}>{(menu, i) => renderMenu(menu)}</For>
    </>
  );
};

export default App;
