import { Login } from "@/interface/login"

export interface UserInfo {
    token?: string
    userInfo?: Login.UserInfo
    setToken: (token: string) => void
    setUserInfo: (userInfo: Login.UserInfo) => void
  }