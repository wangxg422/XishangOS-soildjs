import { useUserInfoStore } from "@/store/system/user";
import { A } from "@solidjs/router";
import { ParentProps, type Component, createSignal, createEffect } from "solid-js";
import Menu from "../menu";
import { TiDeviceDesktop } from "solid-icons/ti";
//import { watch } from "solidjs-use";
import { SysMenu } from "@/interface/system/menu";
import { useSysMenuStore } from "@/store/system/menu";

interface SidebarProps extends ParentProps {}

const Sidebar: Component<SidebarProps> = props => {
  const userInfo = useUserInfoStore(state => state.userInfo);
  const menuList = userInfo.menuList || [];
  const [activeMenu, setActiveMenu] = createSignal<SysMenu.MenuLayout>(); // 激活的菜单

  const setBreadcrumb = useSysMenuStore(state => state.setBreadcrumb);
  const addTabBar = useSysMenuStore(state => state.addTabBar);

  const selectMenu = (menu: SysMenu.MenuLayout) => {
    setActiveMenu({ ...menu });
  };

  // 监听选择的菜单
  // watch(activeMenu, (activeMenu?: SysMenu.MenuLayout) => {
  //   if (activeMenu && activeMenu.name) {
  //     // 添加到面包屑
  //     setBreadcrumb(activeMenu.name);
  //     // 添加到标签页
  //     addTabBar({
  //       name: activeMenu.name,
  //       path: activeMenu.path,
  //       title: activeMenu.meta.title,
  //       icon: activeMenu.meta.icon
  //     });
  //   }
  // });

  createEffect(() => {
    const menu = activeMenu();
    if (menu && menu.name) {
      // 添加到面包屑
      setBreadcrumb(menu.name);
      // 添加到标签页
      addTabBar({
        name: menu.name,
        path: menu.path,
        title: menu.meta.title,
        icon: menu.meta.icon
      });
    }
  });

  return (
    <>
      <div class="h-full w-full pt-2 flex flex-col justify-start justify-items-center content-center items-center">
        <div class="mb-2 flex justify-center items-center">
          <TiDeviceDesktop size={20} class="mr-2" />
          <A href="/desktop">返回桌面</A>
        </div>
        <div class="w-full flex flex-col justify-start justify-items-center content-start items-start cursor-pointer">
          <For each={menuList}>{m => <Menu menuInfo={m} depth={1} activeMenu={activeMenu()} setActiveMenu={selectMenu} />}</For>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
