import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { AiFillCloseCircle, AiOutlineClose } from 'solid-icons/ai'
import { useSysMenuTabBarStore } from "@/store/system/menu/tabBarStore";

export interface TabBarProps extends ParentProps {}

const TabBar: Component<TabBarProps> = (props) => {
  const tabBarList = useSysMenuTabBarStore(state => state.tabBarList);

  return (
    <>
      <div class="w-full h-8 flex justify-start items-center bg-white">
        <For each={tabBarList}>
          {(tab) => {
            return (
              <div class="h-full mx-1 flex justify-start items-center cursor-pointer hover:font-bold">
                <div></div>
                <div>
                  <A href={tab.path}>{tab.title}</A>
                </div>
                <div><AiOutlineClose /></div>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
};

export default TabBar;
