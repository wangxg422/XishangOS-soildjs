import type { Component, ParentProps } from "solid-js";
import ClassicLayout from "./classicLayout";
import HorizontalLayout from "./horizontalLayout";
import VerticalLayout from "./verticalLayout";
import { SysLayoutEnum } from "@/utils/enums/layout";

export interface LayoutProps extends ParentProps {}

const Layout: Component<LayoutProps> = (props) => {
  const layout: string = $signal(SysLayoutEnum.CLASSIC);
  return (
    <>
      <Switch fallback={<ClassicLayout>{props.children}</ClassicLayout>}>
        <Match when={layout === SysLayoutEnum.CLASSIC}>
          <ClassicLayout>{props.children}</ClassicLayout>
        </Match>
        <Match when={layout === SysLayoutEnum.VERTICAL}>
          <VerticalLayout>{props.children}</VerticalLayout>
        </Match>
        <Match when={layout === SysLayoutEnum.HORIZONTAL}>
          <HorizontalLayout>{props.children}</HorizontalLayout>
        </Match>
      </Switch>
    </>
  );
};

export default Layout;
