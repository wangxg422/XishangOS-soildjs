import create from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysMenu } from "@/interface/system/menu";

export const useSysMenuStore = create(
  persist<SysMenu.SysMenuStore>(
    (set, get) => ({
      breadcrumb: [],
      setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) => set({ breadcrumb }),
    }),
    {
      name: "sysMenuStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
