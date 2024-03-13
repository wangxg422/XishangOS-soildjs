import { SysMenu } from "@/interface/system/menu";
import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { FaSolidAngleUp, FaSolidAngleDown } from "solid-icons/fa";

interface MenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
  depth: number; // 菜单深度
}

const Menu: Component<MenuProps> = (props) => {
  let openSubMenu = $signal(false);

  const clickMenu = () => {
    openSubMenu = !openSubMenu;
  };

  const menuInfo = props.menuInfo;
  // 无孩子即为菜单的叶子节点
  const hasChildren = menuInfo.children && menuInfo.children.length !== 0;

  const styles = {
    "padding-left": (props.depth * 20) * 0.8 + "px"
  }
  return (
    <>
      <Show when={hasChildren}>
        <div class="w-full">
          <div
            class={`w-full h-12 pr-2 flex justify-between items-center hover:bg-[#c5c5c5]"`}
            style={styles}
            onclick={clickMenu}
          >
            <div class="flex justify-start items-center">
              {menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
              <div class="ml-2">{menuInfo.meta.title}</div>
            </div>
            {openSubMenu ? <FaSolidAngleUp /> : <FaSolidAngleDown />}
          </div>
          <Show when={openSubMenu}>
            <For each={menuInfo.children}>
              {(m) => <div class="w-full"><Menu menuInfo={m} depth={props.depth + 1} /></div>}
            </For>
          </Show>
        </div>
      </Show>
      <Show when={!hasChildren}>
        <div class={`w-full h-12 flex justify-start items-center hover:bg-[#c5c5c5]`}
        style={styles}>
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
