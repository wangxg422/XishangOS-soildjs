import { SysMenu } from "@/interface/system/menu";
import { useNavigate } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { FaSolidAngleUp, FaSolidAngleDown } from "solid-icons/fa";
import { MenuTypeEnum } from "@/utils/enums/menu";
import cs from "classnames";
import "./index.scss";

interface MenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
  activeMenu?: SysMenu.MenuLayout; // 选择的菜单
  setActiveMenu: (menu: SysMenu.MenuLayout) => void;
}

const Menu: Component<MenuProps> = props => {
  let openSubMenu = $signal(false);

  const clickDir = () => {
    if (openSubMenu) {
      openSubMenu = false;
      props.setActiveMenu(props.menuInfo);
    } else {
      openSubMenu = true;
      props.setActiveMenu(props.menuInfo);
    }
  };

  const navigate = useNavigate();
  const clickMenu = () => {
    props.setActiveMenu(props.menuInfo);
    navigate(props.menuInfo.path, { replace: true });
  };

  // 无孩子即为菜单的叶子节点
  const hasChildren = props.menuInfo.children && props.menuInfo.children.length !== 0;

  const paddingLeft = {
    "padding-left": `${props.depth * 10 * 0.8}px`
  };
  return (
    <>
      <Show when={hasChildren}>
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
      </Show>
      <Show when={!hasChildren}>
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
      </Show>
    </>
  );
};

export default Menu;
