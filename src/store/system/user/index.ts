import create from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysUser } from "@/interface/system/user";

// 使用 zustand 的 persist 中间件进行持久化
export const useUserInfoStore = create(
  persist<SysUser.IUserInfoStore>(
    (set, get) => ({
      setToken: (token: string) => set({ token }),
      setUserInfo: (userInfo: SysUser.IUserInfo) => set({ userInfo }),
    }),
    {
      name: "userInfoStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
