import { ParentProps, type Component } from "solid-js";
import logo from "@/assets/images/logo.svg";

export interface HeaderLeftProps extends ParentProps {}

const HeaderLeft: Component<HeaderLeftProps> = (props) => {
  return (
    <>
      <div class="header-left h-full flex justify-center items-center">
        <div class="logo w-10 h-10 mr-4">
          <img src={logo} alt="logo" />
        </div>
        <div class="text-lg">XishangOS</div>
      </div>
    </>
  );
};

export default HeaderLeft;
