export interface SysUser {
    userId: string;
    userName: string;
    menus: string[];
    roleList: string[];
    permissionList: string[];
}

export interface UserInfo {
    token?: string
    userInfo?: SysUser
    setToken: (token: string) => void
    setUserInfo: (userInfo: SysUser) => void
  }