import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysAllMenuBreadcrumb {
  allMenuBreadcrumb: SysMenu.IAllBreadcrumb;
  setAllMenuBreadcrumb: (breadcrumb: { [key: string]: SysMenu.IBreadcrumb[] }) => void;
}

export const useSysAllMenuBreadcrumb = createWithStore(
  devtools(
    persist<SysAllMenuBreadcrumb>(
      set => ({
        allMenuBreadcrumb: {},
        setAllMenuBreadcrumb: (allMenuBreadcrumb: SysMenu.IAllBreadcrumb) => set(() => ({ allMenuBreadcrumb }))
      }),
      {
        name: "menuBreadcrumbMap",
        storage: createJSONStorage(() => localStorage)
      }
    ),
    {
      enabled: false,
      name: "menuBreadcrumbMap"
    }
  )
);
