import type { Component, ParentProps } from "solid-js";
import ClassLayout from "./classLayout";
import HorizontalLayout from "./horizontalLayout";
import VerticalLayout from "./verticalLayout";

export interface LayoutProps extends ParentProps {}

const Layout: Component<LayoutProps> = (props) => {
  const layout: string = $signal("vertical");
  return (
    <>
      <HorizontalLayout>{props.children}</HorizontalLayout>
      <Switch fallback={<ClassLayout>{props.children}</ClassLayout>}>
        <Match when={layout === "classic"}>
          <ClassLayout>{props.children}</ClassLayout>
        </Match>
        <Match when={layout === "vertical"}>
          <VerticalLayout>{props.children}</VerticalLayout>
        </Match>
        <Match when={layout === "horizontal"}>
          <HorizontalLayout>{props.children}</HorizontalLayout>
        </Match>
      </Switch>
    </>
  );
};

export default Layout;
