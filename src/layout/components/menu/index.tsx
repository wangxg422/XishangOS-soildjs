import { SysMenu } from "@/interface/system/menu";
import { ParentProps, type Component } from "solid-js";
import { MenuTypeEnum } from "@/utils/enums/menu";
import "./index.scss";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

interface MenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
  activeMenu?: SysMenu.MenuLayout; // 选择的菜单
  setActiveMenu: (menu: SysMenu.MenuLayout) => void;
}

const Menu: Component<MenuProps> = props => {
  return (
    <>
      <Show when={props.menuInfo.type === MenuTypeEnum.DIR}>
        <For each={props.menuInfo.children}>
          {m => (
            <div class="w-full">
              <SubMenu menuInfo={m} depth={props.depth + 1} activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            </div>
          )}
        </For>
      </Show>
      <Show when={props.menuInfo.type === MenuTypeEnum.MENU}>
        <MenuItem
          menuInfo={props.menuInfo}
          depth={props.depth + 1}
          activeMenu={props.activeMenu}
          setActiveMenu={props.setActiveMenu}
        />
      </Show>
    </>
  );
};

export default Menu;
