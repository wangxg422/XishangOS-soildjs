import { useUserInfoStore } from "@/store/sysUser";
import { type Component } from "solid-js";
import defaultUserAvatar from "@/assets/images/user.png";

const Avatar: Component = () => {
  const userInfoStore = useUserInfoStore();

  return (
    <>
      <div class="h-full w-full cursor-pointer flex justify-end items-center">
        <div class="text-md">
          {userInfoStore.userInfo?.username || "XishangOS"}
        </div>
        <div class="avatar mx-2">
          <div class="w-8 rounded-full">
            <img src={defaultUserAvatar} alt="xishang" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
