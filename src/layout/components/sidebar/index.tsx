import { useUserInfoStore } from "@/store/system/user";
import { A } from "@solidjs/router";
import { ParentProps, type Component, createSignal } from "solid-js";
import Menu from "../menu/Menu";
import { TiDeviceDesktop } from "solid-icons/ti";
import { MenuTypeEnum } from "@/utils/enums/menu";
import { watch } from "solidjs-use";
import { useSysMenuBreadcrumbStore } from "@/store/system/menu/breadcrumbStore";
import { useSysAllMenuBreadcrumb } from "@/store/system/menu/allMenuBreadcrumbStore";
import { useSysMenuTabBarStore } from "@/store/system/menu/tabBarStore";
import { SysMenu } from "@/interface/system/menu";

interface SidebarProps extends ParentProps {}

const Sidebar: Component<SidebarProps> = (props) => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const menuList = userInfo.menuList || [];
  let [activeMenu, setActiveMenu] = createSignal<SysMenu.MenuLayout>(); // 激活的菜单

  const allMenuBreadcrumb = useSysAllMenuBreadcrumb(
    (state) => state.allMenuBreadcrumb
  );
  const setBreadcrumb = useSysMenuBreadcrumbStore(
    (state) => state.setBreadcrumb
  );
  const { tabBar, setTabBar } = useSysMenuTabBarStore();

  const selectMenu = (menu: SysMenu.MenuLayout) => {
    setActiveMenu(menu);
  };

  // 监听选择的菜单
  watch(activeMenu, (menu) => {
    console.log("menu:", menu);

    if (menu && menu.name) {
      const bread = allMenuBreadcrumb[menu.name]
      console.log('all:', allMenuBreadcrumb)
      console.log('bread:', bread)
      // 添加到面包屑
      setBreadcrumb(bread);
      // 添加到标签页
      const tabBars = tabBar.filter((tab) => tab.name !== menu.name);
      setTabBar([...tabBars, {
        name: menu.name,
        path: menu.path,
        title: menu.meta.title,
        icon: menu.meta.icon
      }]);
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
          <For each={menuList}>
            {(m) => (
              <Menu
                menuInfo={m}
                depth={1}
                breadcrumb={[
                  {
                    name: m.name,
                    path: m.path,
                    title: m.meta.title,
                    type:
                      m.children && m.children.length > 0
                        ? MenuTypeEnum.DIR
                        : MenuTypeEnum.MENU,
                  },
                ]}
                activeMenu={activeMenu()}
                setActiveMenu={selectMenu}
              />
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
