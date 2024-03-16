import { createWithStore } from "solid-zustand";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuBreadcrumbStore {
  breadcrumb: SysMenu.IBreadcrumb[];
  setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) => void;
}

export const useSysMenuBreadcrumbStore =
  createWithStore<SysMenuBreadcrumbStore>((set) => ({
    breadcrumb: [],
    setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) =>
      set(() => ({ breadcrumb })),
  }));
