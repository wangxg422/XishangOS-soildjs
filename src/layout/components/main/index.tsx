import { useSysMenuStore } from "@/store/system/menu";
import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import { AiFillCloseCircle, AiOutlineClose } from 'solid-icons/ai'

export interface MainProps extends ParentProps {}

const Main: Component<MainProps> = (props) => {
  const sysMenuStore = useSysMenuStore();

  const tabBars = sysMenuStore.tabBar

  return (
    <>
      <div class="w-full h-6 flex justify-start items-center bg-white">
        <For each={tabBars}>
          {(tab) => {
            return (
              <div class="h-full flex justify-start items-center cursor-pointer">
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
      <div class="px-1 py-1">{props.children}</div>
    </>
  );
};

export default Main;