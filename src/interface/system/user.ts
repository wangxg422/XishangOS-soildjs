import { SysMenu } from "./menu";

// 用户管理模块
export namespace SysUser {
  export interface IUserInfo {
    userId: string;
    userName: string;
    deptId?: string;
    menuList: SysMenu.MenuLayout[];
    permissions: string[];
    token: string;
  }
}
