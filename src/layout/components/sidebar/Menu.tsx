import { SysMenu } from "@/interface/system/menu";
import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { FaSolidAngleUp, FaSolidAngleDown } from "solid-icons/fa";

interface MenuProps extends ParentProps {
  menuInfo: SysMenu.MenuLayout;
}

const Menu: Component<MenuProps> = (props) => {
  let openSubMenu = $signal(false);

  const clickMenu = () => {
    openSubMenu = !openSubMenu;
  };

  const menuInfo = props.menuInfo;
  // 无孩子即为菜单的叶子节点
  const hasChildren = menuInfo.children && menuInfo.children.length !== 0;
  return (
    <>
      <Show when={hasChildren}>
        <div class="w-full cursor-pointer">
          <div
            class="w-full h-12 px-2 py-1 flex justify-between items-center hover:bg-[#c5c5c5]"
            onclick={clickMenu}
          >
            <div class="flex justify-start items-center">
              {menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
              <div class="ml-2">{menuInfo.meta.title}</div>
            </div>
            {openSubMenu ? <FaSolidAngleUp /> : <FaSolidAngleDown />}
          </div>
          <Show when={openSubMenu}>
            <For each={menuInfo.children}>{(m) => <Menu menuInfo={m} />}</For>
          </Show>
        </div>
      </Show>
      <Show when={!hasChildren}>
        <div class="w-full h-10 px-2 py-1 flex justify-start items-center hover:bg-[#c5c5c5]">
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
