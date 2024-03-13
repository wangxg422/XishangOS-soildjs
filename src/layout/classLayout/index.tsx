import { ParentProps, type Component } from "solid-js";

export interface ClassicLayoutProps extends ParentProps {}

const ClassLayout: Component<ClassicLayoutProps> = (props) => {
  return (
    <>
    Layout
      {props.children}
    </>
  );
};

export default ClassLayout;
