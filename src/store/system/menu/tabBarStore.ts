import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuTabBarStore {
  tabBarList: SysMenu.ITabBarItem[];
  addTabBar: (tabBar: SysMenu.ITabBarItem) => void;
}

export const useSysMenuTabBarStore = createWithStore(
  persist<SysMenuTabBarStore>(
    (set) => ({
      tabBarList: [],
      addTabBar: (tabBar: SysMenu.ITabBarItem) => set(state => {
        return {tabBarList: [...state.tabBarList, tabBar]}
      }),
    }),
    {
      name: "sysMenuTabBarStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
