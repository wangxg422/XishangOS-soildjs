import type { Component, ParentProps } from "solid-js";
import cs from "classnames";
import "./index.scss";
import { SysMenu } from "@/interface/system/menu";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { useNavigate } from "@solidjs/router";

export interface MenuItemProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
  activeMenu?: SysMenu.MenuLayout; // 选择的菜单
  setActiveMenu: (menu: SysMenu.MenuLayout) => void;
}

const MenuItem: Component<MenuItemProps> = props => {
  const navigate = useNavigate();
  const clickMenu = () => {
    props.setActiveMenu(props.menuInfo);
    navigate(props.menuInfo.path, { replace: true });
  };

  const paddingLeft = {
    "padding-left": `${props.depth * 10 * 0.8}px`
  };

  return (
    <>
      <div
        class={cs(
          `w-full h-12`,
          (() => {
            if (props.activeMenu?.name === props.menuInfo.name) {
              return ["menu-item-is-active hover:bg-[#ecf3fd]"];
            } else {
              return ["hover:bg-[#cccccc]"];
            }
          })()
        )}
        onclick={clickMenu}
      >
        <div class="h-full w-full flex justify-start items-center" style={paddingLeft}>
          {props.menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
          <div class="ml-2">{props.menuInfo.meta.title}</div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
