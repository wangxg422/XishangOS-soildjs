import { SysMenu } from "@/interface/system/menu";
import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { FaSolidAngleUp, FaSolidAngleDown } from "solid-icons/fa";
import { MenuTypeEnum } from "@/utils/enums/menu";
import { useSysMenuStore } from "@/store/system/menu";

interface MenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
  breadcrumb: SysMenu.IBreadcrumb[];
  selectMenu: string; // 选择的菜单
  setSelectMenu: (name: string) => void;
}

const Menu: Component<MenuProps> = (props) => {
  let openSubMenu = $signal(false);

  const menuInfo = props.menuInfo;

  const sysMenuStore = useSysMenuStore();

  const clickDir = () => {
    openSubMenu = !openSubMenu;
    props.setSelectMenu("");
    sysMenuStore.setBreadcrumb(props.breadcrumb);
  };

  const clickMenu = () => {
    props.setSelectMenu(menuInfo.name);
    sysMenuStore.setBreadcrumb(props.breadcrumb);
    // 添加到标签页
    const tabBars = sysMenuStore.tabBar.filter(
      (tab) => tab.name !== menuInfo.name
    );
    console.log(tabBars)
    console.log(menuInfo.meta.title)
    sysMenuStore.setTabBar([
      ...tabBars,
      {
        name: menuInfo.name,
        path: menuInfo.path,
        title: menuInfo.meta.title,
        icon: menuInfo.meta.icon,
      },
    ]);
  };

  // 无孩子即为菜单的叶子节点
  const hasChildren = menuInfo.children && menuInfo.children.length !== 0;

  const activeStyle = {
    "background-color": "#e8f1fe",
    "border-left": "4px solid #347bf6",
  };
  const paddingStyles = {
    "padding-left": props.depth * 20 * 0.8 + "px",
  };

  return (
    <>
      <Show when={hasChildren}>
        <div class="w-full">
          <div
            class={`w-full h-12 pr-2 flex justify-between items-center hover:bg-[#c5c5c5]"`}
            style={paddingStyles}
            onclick={clickDir}
          >
            <div class="flex justify-start items-center">
              {menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
              <div class="ml-2">{menuInfo.meta.title}</div>
            </div>
            {openSubMenu ? <FaSolidAngleUp /> : <FaSolidAngleDown />}
          </div>
          <Show when={openSubMenu}>
            <For each={menuInfo.children}>
              {(m) => (
                <div class="w-full">
                  <Menu
                    menuInfo={m}
                    depth={props.depth + 1}
                    breadcrumb={[
                      ...props.breadcrumb,
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
                    selectMenu={props.selectMenu}
                    setSelectMenu={props.setSelectMenu}
                  />
                </div>
              )}
            </For>
          </Show>
        </div>
      </Show>
      <Show when={!hasChildren}>
        <div
          class={`w-full h-12 flex justify-start items-center hover:bg-[#c5c5c5]`}
          style={
            props.selectMenu === menuInfo.name
              ? { ...paddingStyles, ...activeStyle }
              : paddingStyles
          }
          onclick={clickMenu}
        >
          {menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
          <A class="ml-2" href={menuInfo.path}>
            {menuInfo.meta.title}
          </A>
        </div>
      </Show>
    </>
  );
};

export default Menu;
