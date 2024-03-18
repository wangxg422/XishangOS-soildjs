import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { SysMenu } from "@/interface/system/menu";

export interface SysAllMenuBreadcrumb {
  allMenuBreadcrumb: SysMenu.IAllBreadcrumb;
  setAllMenuBreadcrumb: (breadcrumb: {
    [key: string]: SysMenu.IBreadcrumb[];
  }) => void;
}

export const useSysAllMenuBreadcrumb = createWithStore(
  immer(
    devtools(
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
    )
  )
);
