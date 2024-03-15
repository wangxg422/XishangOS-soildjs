import { ParentProps, type Component } from "solid-js";
import "./index.scss";
import HeaderLeft from "../components/headerLeft";
import Footer from "../components/footer";
import HeaderRight from "../components/headerRight";
import HeaderMid from "../components/headerMid";
import Main from "../components/main";

export interface HorizontalLayoutProps extends ParentProps {}

const HorizontalLayout: Component<HorizontalLayoutProps> = (props) => {
  return (
    <>
      <div class="horizontal-layout w-screen h-screen">
        <div class="header border-b">
          <div class="h-full">
            <HeaderLeft />
          </div>
          <div class=""><HeaderMid /></div>
          <div><HeaderRight /></div>
        </div>
        <div class="main"><Main>{props.children}</Main></div>
        <div class="footer"><Footer /></div>
      </div>
    </>
  );
};

export default HorizontalLayout;
