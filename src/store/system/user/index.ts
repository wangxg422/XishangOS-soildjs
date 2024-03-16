import create from "solid-zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SysUser } from "@/interface/system/user";

export interface UserInfoStore {
  userInfo: SysUser.IUserInfo
  setUserInfo: (userInfo: SysUser.IUserInfo) => void
}

// 使用 zustand 的 persist 中间件进行持久化
export const useUserInfoStore = create(
  persist<UserInfoStore>(
    set => ({
      userInfo: {
        userId: "",
        userName: "",
        deptId: "",
        menuList: [],
        permissions: [],
        token: ""
      },
      setUserInfo: (userInfo: SysUser.IUserInfo) => set(() => ({ userInfo })),
    }),
    {
      name: "userInfoStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
