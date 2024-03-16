import { useUserInfoStore } from "@/store/system/user";
import { A } from "@solidjs/router";
import { ParentProps, type Component, createSignal } from "solid-js";
import Menu from "./Menu";
import { TiDeviceDesktop } from "solid-icons/ti";
import { MenuTypeEnum } from "@/utils/enums/menu";
import { watch } from 'solidjs-use'
import { useSysMenuBreadcrumbStore } from "@/store/system/menu/breadcrumbStore";
import { useSysAllMenuBreadcrumb } from "@/store/system/menu/allMenuBreadcrumbStore";
import { useSysMenuTabBarStore } from "@/store/system/menu/tabBarStore";

interface SidebarProps extends ParentProps {}

const Sidebar: Component<SidebarProps> = (props) => {
  const userInfoStore = useUserInfoStore();
  const menuList = userInfoStore.userInfo?.menuList || [];
  let [selectMenu, setSelectMenu] = createSignal(""); // 单击选择的菜单

  const allMenuBreadcrumb = useSysAllMenuBreadcrumb(state => state.allMenuBreadcrumb);
  const setBreadcrumb = useSysMenuBreadcrumbStore(state => state.setBreadcrumb);
  const {tabBar, setTabBar} = useSysMenuTabBarStore();
  
  const activeMenu = (name: string) => {
    setSelectMenu(name);
  };

  // 监听选择的菜单
  watch(selectMenu, menuName => {
    console.log('menu:', menuName)
    
    if(menuName) {
      // 添加到面包屑
      setBreadcrumb(allMenuBreadcrumb[menuName]);
      // 添加到标签页
      const tabBars = tabBar.filter(
          (tab) => tab.name !== menuName
        );
        setTabBar([...tabBars]);
    }
  })

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
                selectMenu={selectMenu()}
                setSelectMenu={activeMenu}
              />
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
