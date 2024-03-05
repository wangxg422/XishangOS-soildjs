import { Route } from "@solidjs/router";
import type { Component } from "solid-js";
import { Menu } from "./interface";
import "./index.scss";
import icon from '@/assets/images/logo.svg';

const App: Component = () => {
  const menuList: Menu[] = $signal([
    { name: "首页", path: "/" },
    {
      name: "系统管理",
      path: "/system",
      children: [
        { name: "用户管理", path: "/system/user" },
        { name: "角色管理", path: "/system/role" },
      ],
    },
    {
      name: "应用管理",
      path: "/app",
      children: [
        {
          name: "实例管理",
          path: "/app/instance",
        },
        {
          name: "安装包管理",
          path: "/app/package",
        },
        {
          name: "版本管理",
          path: "/app/version",
        },
      ],
    },
  ]);

  function renderMenu(menu: Menu): any {
    if (!menu) {
      return;
    }
    if (menu.children && menu.children.length !== 0) {
      return (
        <>
          <div class="menu-item">
            <img src={icon} alt="icon" />
            <a href={menu.path}>{menu.name}</a>
          </div>
          <For each={menu.children}>{(m, i) => renderMenu(m)}</For>
        </>
      );
    }
    if (!menu.children || menu.children.length === 0) {
      return (
        <div class="menu-item">
          <img src={icon} alt="icon" />
          <a href={menu.path}>{menu.name}</a>
        </div>
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
