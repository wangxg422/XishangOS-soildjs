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
  breadcrumb: SysMenu.IBreadcrumb[];
  selectMenu: string; // 选择的菜单
  setSelectMenu: (name: string) => void;
}

const Menu: Component<MenuProps> = (props) => {
  let openSubMenu = $signal(false);

  const menuInfo = props.menuInfo;

  const clickDir = () => {
    openSubMenu = !openSubMenu;
    props.setSelectMenu(menuInfo.name);
  };

  const navigate = useNavigate();
  const clickMenu = () => {
    props.setSelectMenu(menuInfo.name);
    navigate(menuInfo.path, {});
  };

  // 无孩子即为菜单的叶子节点
  const hasChildren = menuInfo.children && menuInfo.children.length !== 0;

  const paddingLeft = {
    "padding-left": `${props.depth * 10 * 0.8}px`,
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
          class={cs(
            `w-full h-12`,
            (() => {
              if (props.selectMenu === menuInfo.name) {
                return ["menu-item-is-active hover:bg-[#ecf3fd]"];
              } else {
                return ["hover:bg-[#cccccc]"];
              }
            })()
          )}
          onclick={clickMenu}
        >
          <div class="h-full w-full flex justify-start items-center" style={paddingLeft}>
            {menuInfo.meta.icon ? <div></div> : <RiSystemApps2Fill />}
            <div class="ml-2">
              {menuInfo.meta.title}
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default Menu;
