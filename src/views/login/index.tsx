import type { Component } from "solid-js";
import bgImage from "@/assets/images/bg.jpg";
import logo from "@/assets/images/default_app.png";
import { ImUser } from "solid-icons/im";
import { AiFillLock } from "solid-icons/ai";
import { getInputValue } from "@/utils/element";
import { AiOutlineEye, AiOutlineEyeInvisible } from "solid-icons/ai";
import "./index.scss";
import { loginApi } from "@/api/modules/login";
import { useUserInfoStore } from "@/store/system/user";
import { useNavigate } from "@solidjs/router";
import { getMenuBreadcrumb } from "@/utils/menu";
import { SysUser } from "@/interface/system/user";
import { useSysMenuStore } from "@/store/system/menu";

const App: Component = () => {
  const userForm = $signal({
    username: "",
    password: "",
    rememberMe: "0" // 0不记住 1记住
  });
  let showPassword = $signal(false);

  const setUserInfo = useUserInfoStore(state => state.setUserInfo);
  const setMenuBreadcrumbMap = useSysMenuStore(state => state.setMenuBreadcrumbMap);

  const navigate = useNavigate();
  const login = async () => {
    const userInfo: SysUser.IUserInfo = await loginApi({ username: userForm.username, password: userForm.password });
    setUserInfo(userInfo);
    setMenuBreadcrumbMap(getMenuBreadcrumb(userInfo.menuList));
    navigate("/");
  };
  const reg = () => {};
  const forgetPassword = () => {};

  const usernameInput = (e: Event) => {
    userForm.username = getInputValue(e);
  };
  const passwordInput = (e: Event) => {
    userForm.password = getInputValue(e);
  };
  const clickRemember = () => {
    userForm.rememberMe = userForm.rememberMe === "1" ? "0" : "1";
  };

  return (
    <>
      <div
        class="login w-screen h-screen bg-cover hover:cursor-pointer flex justify-center items-center"
        style={{ "background-image": `url(${bgImage})` }}
      >
        <div class="login-form w-full max-w-sm flex flex-col justify-center items-center bg-white px-6 py-6 rounded-lg">
          <div class="mb-6 flex justify-center items-center">
            <img src={logo} alt="XishangOS" class="w-14 h-14" />
            <div class="text-white text-xl font-bold ml-2">XishangOS</div>
          </div>
          <label class="input input-bordered flex items-center gap-2 w-full">
            <ImUser />
            <input type="text" class="grow" placeholder="用户名" oninput={usernameInput} />
          </label>
          <label class="input input-bordered flex items-center gap-2 w-full mb-2 mt-2">
            <AiFillLock />
            <input type={showPassword ? "text" : "password"} class="grow" oninput={passwordInput} />
            <div
              class="hover:cursor-pointer"
              onmousedown={() => (showPassword = true)}
              onmouseup={() => (showPassword = false)}
              onmouseleave={() => (showPassword = false)}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </label>
          <div class="w-full">
            <button class="btn btn-info w-full" onclick={login}>
              登录
            </button>
          </div>
          <div class="w-full mt-2 flex items-center justify-between">
            <div class="flex items-center justify-center">
              <input
                type="checkbox"
                checked={false}
                value={userForm.rememberMe}
                class="checkbox checkbox-sm checkbox-primary"
                oninput={clickRemember}
              />
              <span class="ml-2 text-md">记住我</span>
            </div>
            <div class="text-md hover:text-sky-700 hover:font-bold" onclick={forgetPassword}>
              忘记密码?
            </div>
          </div>
          <div class="w-full flex items-center justify-center">
            <div class="reg-left h-0.5 w-1/4"></div>
            <span class="hover:text-sky-700 hover:font-bold mx-2" onclick={reg}>
              没有账户? 立即注册
            </span>
            <div class="reg-right h-0.5 w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
