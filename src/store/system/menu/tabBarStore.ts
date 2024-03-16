import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuTabBarStore {
  tabBarList: SysMenu.ITabBarItem[];
  setTabBarList: (tabBar: SysMenu.ITabBarItem[]) => void;
}

export const useSysMenuTabBarStore = createWithStore(
  persist<SysMenuTabBarStore>(
    (set) => ({
      tabBarList: [],
      setTabBarList: (tabBarList: SysMenu.ITabBarItem[]) => set(() => ({ tabBarList })),
    }),
    {
      name: "sysMenuTabBarStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
