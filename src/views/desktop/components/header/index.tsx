import { onMount } from "solid-js";

export default function Header() {
  onMount(() => {
    //TODO 获取用户信息
  });

  return (
    <>
      <div class="text-white mt-2 mr-2 hover:cursor-pointer flex justify-center items-center">
        <div class="text-xl">XishangOS</div>
        <div class="avatar mx-2">
          <div class="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
