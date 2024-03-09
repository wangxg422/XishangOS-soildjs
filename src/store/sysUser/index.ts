import create from "solid-zustand"
import { persist } from "zustand/middleware"
import { SysUser, UserInfo } from "../interface"


// 使用 zustand 的 persist 中间件进行持久化
export const useUserInfoStore = create(
  persist<UserInfo>(
    (set, get) => ({
      setToken: (token: string) => set({ token }),
      setUserInfo: (userInfo: SysUser) => set({ userInfo })
    }),
    {
      name: "userInfoStore",
      getStorage: () => sessionStorage
    }
  )
)
