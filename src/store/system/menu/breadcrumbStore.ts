import { createWithStore } from "solid-zustand";
import { SysMenu } from "@/interface/system/menu";
import { useSysAllMenuBreadcrumb } from "./allMenuBreadcrumbStore";

export interface SysMenuBreadcrumbStore {
  breadcrumb: SysMenu.IBreadcrumb[];
  setBreadcrumb: (menuName: string) => void;
}

export const useSysMenuBreadcrumbStore =
  createWithStore<SysMenuBreadcrumbStore>((set) => ({
    breadcrumb: [],
    setBreadcrumb: (menuName: string) =>
      set(() => {
        const allMenuBreadcrumb = useSysAllMenuBreadcrumb(
          (state) => state.allMenuBreadcrumb
        );
        return { breadcrumb: allMenuBreadcrumb[menuName] };
      }),
  }));
