import { useUserInfoStore } from "@/store/sysUser";

export default function Header() {
  const userInfoStore = useUserInfoStore();

  return (
    <>
      <div class="text-white mt-2 mr-2 hover:cursor-pointer flex justify-center items-center">
        <div class="text-xl">{userInfoStore.userInfo?.userName || "XishangOS"}</div>
        <div class="avatar mx-2">
          <div class="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
