import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export interface SysMenuBreadcrumbStore {
  breadcrumb: SysMenu.IBreadcrumb[];
  setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) => void;
}

export const useSysMenuBreadcrumbStore = createWithStore(
  persist<SysMenuBreadcrumbStore>(
    (set) => ({
      breadcrumb: [],
      setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) =>
        set(() => ({ breadcrumb })),
    }),
    {
      name: "sysMenuBreadcrumbStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
