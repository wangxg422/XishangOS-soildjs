import type { Component, ParentProps } from "solid-js";
import ClassicLayout from "./classicLayout";
import HorizontalLayout from "./horizontalLayout";
import VerticalLayout from "./verticalLayout";

export interface LayoutProps extends ParentProps {}

const Layout: Component<LayoutProps> = (props) => {
  const layout: string = $signal("vertical");
  return (
    <>
      <Switch fallback={<ClassicLayout>{props.children}</ClassicLayout>}>
        <Match when={layout === "classic"}>
          <ClassicLayout>{props.children}</ClassicLayout>
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
