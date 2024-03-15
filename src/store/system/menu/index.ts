import create from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export const useSysMenuStore = create(
  persist<SysMenu.SysMenuStore>(
    (set, get) => ({
      breadcrumb: [],
      tabBar: [],
      setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) => set({ breadcrumb }),
      setTabBar: (tabBar: SysMenu.ITabBarItem[]) => set({ tabBar }),
    }),
    {
      name: "sysMenuStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);