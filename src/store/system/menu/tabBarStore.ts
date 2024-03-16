import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuTabBarStore {
  tabBar: SysMenu.ITabBarItem[];
  setTabBar: (tabBar: SysMenu.ITabBarItem[]) => void
}

export const useSysMenuTabBarStore = createWithStore(
  persist<SysMenuTabBarStore>(
    set => ({
      tabBar: [],
      setTabBar: (tabBar: SysMenu.ITabBarItem[]) => set(() => ({ tabBar })),
    }),
    {
      name: "sysMenuTabBarStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
