import { useUserInfoStore } from "@/store/system/user";
import { type Component } from "solid-js";
import defaultUserAvatar from "@/assets/images/user.png";

const Avatar: Component = () => {
  const userInfo = useUserInfoStore(state => state.userInfo);

  return (
    <>
      <div class="h-full w-full cursor-pointer flex justify-end items-center">
        <div class="text-md">
          {userInfo.userName || "XishangOS"}
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
