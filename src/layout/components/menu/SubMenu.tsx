import { SysMenu } from "@/interface/system/menu";
import type { Component, ParentProps } from "solid-js";
import cs from "classnames";
import "./index.scss";
import { FaSolidAngleDown, FaSolidAngleUp } from "solid-icons/fa";
import { RiSystemApps2Fill } from "solid-icons/ri";
import Menu from ".";

export interface SubMenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
  activeMenu?: SysMenu.MenuLayout; // 选择的菜单
  setActiveMenu: (menu: SysMenu.MenuLayout) => void;
}

const SubMenu: Component<SubMenuProps> = props => {
  let openSubMenu = $signal(false);

  const paddingLeft = {
    "padding-left": `${props.depth * 10 * 0.8}px`
  };

  const clickDir = () => {
    // 点击折叠
    if (openSubMenu) {
      openSubMenu = false;
      //props.setActiveMenu(props.menuInfo);
    } else {
      openSubMenu = true;
      props.setActiveMenu(props.menuInfo);
    }
  };

  return (
    <>
      <div class="w-full">
        <div
          class={`w-full h-12 pr-2 flex justify-between items-center hover:bg-[#c5c5c5]"`}
          style={paddingLeft}
          onclick={clickDir}
        >
          <div class="flex justify-start items-center">
            {props.menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
            <div class="ml-2">{props.menuInfo.meta.title}</div>
          </div>
          {openSubMenu ? <FaSolidAngleUp /> : <FaSolidAngleDown />}
        </div>
        <Show when={openSubMenu}>
          <For each={props.menuInfo.children}>
            {m => (
              <div class="w-full">
                <Menu menuInfo={m} depth={props.depth + 1} activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
              </div>
            )}
          </For>
        </Show>
      </div>
    </>
  );
};

export default SubMenu;
