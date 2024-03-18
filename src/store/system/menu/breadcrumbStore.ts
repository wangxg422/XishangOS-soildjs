import { createWithStore } from "solid-zustand";
import { SysMenu } from "@/interface/system/menu";
import { useSysAllMenuBreadcrumb } from "./allMenuBreadcrumbStore";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

export interface SysMenuBreadcrumbStore {
  breadcrumb: SysMenu.IBreadcrumb[];
  setBreadcrumb: (menuName: string) => void;
}

export const useSysMenuBreadcrumbStore = createWithStore(
  devtools(
    persist<SysMenuBreadcrumbStore>(
      set => ({
        breadcrumb: [],
        setBreadcrumb: (menuName: string) =>
          set(() => {
            const allMenuBreadcrumb = useSysAllMenuBreadcrumb(state => state.allMenuBreadcrumb);
            console.log("all:", allMenuBreadcrumb);
            console.log("name:", menuName);
            console.log("bread:", allMenuBreadcrumb[menuName]);
            return { breadcrumb: allMenuBreadcrumb[menuName] };
          })
      }),
      {
        name: "menuBreadcrumb",
        storage: createJSONStorage(() => localStorage)
      }
    ),
    {
      enabled: false,
      name: "menuBreadcrumb"
    }
  )
);
