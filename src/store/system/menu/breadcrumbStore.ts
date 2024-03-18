import { createWithStore } from "solid-zustand";
import { SysMenu } from "@/interface/system/menu";
import { useSysAllMenuBreadcrumb } from "./allMenuBreadcrumbStore";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface SysMenuBreadcrumbStore {
  breadcrumb: SysMenu.IBreadcrumb[];
  setBreadcrumb: (menuName: string) => void;
}

const allMenuBreadcrumb = useSysAllMenuBreadcrumb(
  (state) => state.allMenuBreadcrumb
);

export const useSysMenuBreadcrumbStore = createWithStore(
  immer(
    devtools(
      persist<SysMenuBreadcrumbStore>(
        (set) => ({
          breadcrumb: [],
          setBreadcrumb: (menuName: string) =>
            set(() => {
              console.log("all:", allMenuBreadcrumb);
              console.log("name:", menuName);
              console.log("bread:", allMenuBreadcrumb[menuName]);
              return { breadcrumb: allMenuBreadcrumb[menuName] };
            }),
        }),
        {
          name: "menuBreadcrumb",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
