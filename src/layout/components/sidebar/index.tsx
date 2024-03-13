import { useUserInfoStore } from "@/store/sysUser";
import { A } from "@solidjs/router";
import { ParentProps, type Component } from "solid-js";
import Menu from "./Menu";
import { TiDeviceDesktop } from 'solid-icons/ti'

interface SidebarProps extends ParentProps {}

const Sidebar: Component<SidebarProps> = (props) => {
  const userInfoStore = useUserInfoStore();
  const menuList = userInfoStore.userInfo?.menuList || [];

  return (
    <>
      <div class="h-full w-full pt-2 flex flex-col justify-start justify-items-center content-center items-center">
        <div class="mb-2 flex justify-center items-center">
        <TiDeviceDesktop size={20} class="mr-2" /><A href="/desktop">返回桌面</A>
        </div>
        <div class="w-full flex flex-col justify-start justify-items-center content-start items-start">
          <For each={menuList}>{menu => <Menu menuInfo={menu} />}</For>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
