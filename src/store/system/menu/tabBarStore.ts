import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuTabBarStore {
  tabBarList: SysMenu.ITabBarItem[];
  addTabBar: (tabBar: SysMenu.ITabBarItem) => void;
}

export const useSysMenuTabBarStore = createWithStore(
  devtools(
    persist<SysMenuTabBarStore>(
      set => ({
        tabBarList: [],
        addTabBar: (tabBar: SysMenu.ITabBarItem) =>
          set(state => {
            const list = state.tabBarList.filter(item => item.name !== tabBar.name);
            return { tabBarList: [...list, tabBar] };
          })
      }),
      {
        name: "menuTabBar",
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
    {
      name: "menuTabBar",
      enabled: true
    }
  )
);
