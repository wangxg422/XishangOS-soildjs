import { SysMenu } from "./menu";

// 用户管理模块
export namespace SysUser {
  export interface IUserInfoStore {
    token?: string
    userInfo?: SysUser.IUserInfo
    setToken: (token: string) => void
    setUserInfo: (userInfo: SysUser.IUserInfo) => void
  }
  export interface IUserInfo {
    userId: string;
    userName: string;
    deptId: string;
    menuList: SysMenu.MenuLayout[];
    permissions: string[];
  }
}
