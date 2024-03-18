import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuStore {
  menuBreadcrumbMap: SysMenu.IAllBreadcrumb;
  breadcrumbList: SysMenu.IBreadcrumb[];
  tabBarList: SysMenu.ITabBarItem[];
  addTabBar: (tabBar: SysMenu.ITabBarItem) => void;
  setBreadcrumb: (menuName: string) => void;
  setMenuBreadcrumbMap: (breadcrumb: { [key: string]: SysMenu.IBreadcrumb[] }) => void;
}

export const useSysMenuStore = createWithStore(
  devtools(
    persist<SysMenuStore>(
      (set, get) => ({
        menuBreadcrumbMap: {},
        breadcrumbList: [],
        tabBarList: [],
        addTabBar: (tabBar: SysMenu.ITabBarItem) =>
          set(state => {
            const list = state.tabBarList.filter(item => item.name !== tabBar.name);
            return { ...state, tabBarList: [...list, tabBar] };
          }),
        setBreadcrumb: (menuName: string) =>
          set(state => {
            return { ...state, breadcrumbList: get().menuBreadcrumbMap[menuName] || [] };
          }),
        setMenuBreadcrumbMap: (breadcrumb: { [key: string]: SysMenu.IBreadcrumb[] }) =>
          set(state => {
            return { ...state, menuBreadcrumbMap: breadcrumb || {} };
          })
      }),
      {
        name: "sysMenuStore",
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
    {
      name: "sysMenuStore",
      enabled: true
    }
  )
);
