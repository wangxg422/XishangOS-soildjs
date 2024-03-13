import { ParentProps, type Component } from "solid-js";
import "./index.scss";
import HeaderLeft from "../components/headerLeft";
import Footer from "../components/footer";
import HeaderRight from "../components/headerRight";

export interface ClassicLayoutProps extends ParentProps {}

const ClassLayout: Component<ClassicLayoutProps> = (props) => {
  return (
    <>
      <div class="classic-layout w-screen h-screen">
        <div class="header">
          <div class="h-full">
            <HeaderLeft />
          </div>
          <div class="">中间</div>
          <div><HeaderRight /></div>
        </div>
        <div class="sidebar"></div>
        <div class="main">{props.children}</div>
        <div class="footer"><Footer /></div>
      </div>
    </>
  );
};

export default ClassLayout;
