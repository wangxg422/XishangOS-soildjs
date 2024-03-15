import type { Component, ParentProps } from "solid-js";
import ClassLayout from "./classLayout";
import HorizontalLayout from "./horizontalLayout";

export interface LayoutProps extends ParentProps {}

const Layout: Component<LayoutProps> = (props) => {
  return (
    <>
      {/* <ClassLayout>{props.children}</ClassLayout> */}
      <HorizontalLayout>{props.children}</HorizontalLayout>
    </>
  );
};

export default Layout;
