import { useUserInfoStore } from "@/store/system/user";
import { A } from "@solidjs/router";
import { ParentProps, type Component, createSignal } from "solid-js";
import Menu from "./Menu";
import { TiDeviceDesktop } from "solid-icons/ti";
import { MenuTypeEnum } from "@/utils/enums/menu";
import { watch } from 'solidjs-use'
import { useSysMenuStore } from "@/store/system/menu";

interface SidebarProps extends ParentProps {}

const Sidebar: Component<SidebarProps> = (props) => {
  const userInfoStore = useUserInfoStore();
  const menuList = userInfoStore.userInfo?.menuList || [];
  let [selectMenu, setSelectMenu] = createSignal(""); // 单击选择的菜单

  const sysMenuStore = useSysMenuStore();
  
  const activeMenu = (name: string) => {
    setSelectMenu(name);
  };

  // 监听选择的菜单
  watch(selectMenu, menuName => {
    console.log('menu:', menuName)
    // 添加到面包屑
    sysMenuStore.setBreadcrumb([...sysMenuStore.allMenuBreadcrumb[selectMenu()]]);
    // 添加到标签页
    // const tabBars = sysMenuStore.tabBar.filter(
    //   (tab) => tab.name !== menuName
    // );
    // sysMenuStore.setTabBar([
    //   ...tabBars,
    // ]);
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
