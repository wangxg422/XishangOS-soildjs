import { ParentProps, type Component } from "solid-js";
import "./index.scss";
import HeaderLeft from "../components/headerLeft";
import Footer from "../components/footer";
import HeaderRight from "../components/headerRight";
import Sidebar from "../components/sidebar";
import HeaderMid from "../components/headerMid";
import Main from "../components/main";

export interface VerticalLayoutProps extends ParentProps {}

const VerticalLayout: Component<VerticalLayoutProps> = (props) => {
  return (
    <>
      <div class="vertical-layout w-screen h-screen">
        <div class="header border-b">
          <div class="h-full">
            <HeaderLeft />
          </div>
          <div class="">
            <HeaderMid />
          </div>
          <div>
            <HeaderRight />
          </div>
        </div>
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="main">
          <Main>{props.children}</Main>
        </div>
        <div class="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default VerticalLayout;
