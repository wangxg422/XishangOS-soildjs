import { createWithStore } from "solid-zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { SysUser } from "@/interface/system/user";

export interface UserInfoStore {
  userInfo: SysUser.IUserInfo;
  setUserInfo: (userInfo: SysUser.IUserInfo) => void;
}

export const useUserInfoStore = createWithStore(
  devtools(
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
        setUserInfo: (userInfo: SysUser.IUserInfo) => set(() => ({ userInfo }))
      }),
      {
        name: "userInfoStore",
        storage: createJSONStorage(() => localStorage)
      }
    ),
    {
      name: "userInfoStore",
      enabled: true
    }
  )
);
