import create from "solid-zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { UserInfo } from "../interface"
import { Login } from "@/interface/login"


// 使用 zustand 的 persist 中间件进行持久化
export const useUserInfoStore = create(
  persist<UserInfo>(
    (set, get) => ({
      setToken: (token: string) => set({ token }),
      setUserInfo: (userInfo: Login.UserInfo) => set({ userInfo })
    }),
    {
      name: "userInfoStore",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
