import type { Component } from "solid-js";
import bgImage from "@/assets/images/bg.jpg";
import logo from "@/assets/images/default_app.png";
import { ImUser } from "solid-icons/im";
import { AiFillLock } from "solid-icons/ai";
import { getInputValue } from "@/utils/element";

const App: Component = () => {
  const userForm = $signal({
    username: "",
    password: ""
  })

  const login = () => {

  }
  const reg = () => {

  }
  const forgetPassword = () => {

  }

  const usernameInput = (e: Event) => {
    userForm.username = getInputValue(e);
  }
  const passwordInput = (e: Event) => {
    userForm.password = getInputValue(e);
  }

  return (
    <>
      <div
        class="login w-screen h-screen hover:cursor-pointer flex justify-center items-center"
        style={{ "background-image": `url(${bgImage})` }}
      >
        <div class="login-form w-full max-w-sm flex flex-col justify-center items-center bg-white px-6 py-6 rounded-lg">
          <div class="mb-6 flex justify-center items-center">
            <img src={logo} alt="XishangOS" class="w-14 h-14" />
            <div class="text-black text-lg ml-2">XishangOS</div>
          </div>
          <label class="input input-bordered flex items-center gap-2 w-full">
            <ImUser />
            <input type="text" class="grow" placeholder="用户名" oninput={usernameInput} />
          </label>
          <label class="input input-bordered flex items-center gap-2 w-full mb-2 mt-2">
            <AiFillLock />
            <input type="password" class="grow" oninput={passwordInput} />
          </label>
          <div>
            <button class="btn btn-info" onclick={login}>登录</button>
            <button class="btn" onclick={reg}>注册</button>
          </div>
          <div><div onclick={forgetPassword}>忘记密码?</div></div>
        </div>
      </div>
    </>
  );
};

export default App;
