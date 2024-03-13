import { ParentProps, type Component } from "solid-js";
import "./index.scss";

export interface ClassicLayoutProps extends ParentProps {}

const ClassLayout: Component<ClassicLayoutProps> = (props) => {

  return (
    <>
      <div class="classic-layout w-screen h-screen">
        <div class="header"></div>
        <div class="sidebar"></div>
        <div class="main">{props.children}</div>
        <div class="footer"></div>
      </div>
    </>
  );
};

export default ClassLayout;
