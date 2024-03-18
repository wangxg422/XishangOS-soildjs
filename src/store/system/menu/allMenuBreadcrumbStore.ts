import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysAllMenuBreadcrumb {
  allMenuBreadcrumb: SysMenu.IAllBreadcrumb;
  setAllMenuBreadcrumb: (breadcrumb: {
    [key: string]: SysMenu.IBreadcrumb[];
  }) => void;
}

export const useSysAllMenuBreadcrumb = createWithStore(
  persist<SysAllMenuBreadcrumb>(
    (set) => ({
      allMenuBreadcrumb: {},
      setAllMenuBreadcrumb: (allMenuBreadcrumb: SysMenu.IAllBreadcrumb) =>
        set(() => ({ allMenuBreadcrumb })),
    }),
    {
      name: "menuBreadcrumbMap",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
