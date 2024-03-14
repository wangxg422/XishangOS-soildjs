import { useSysMenuStore } from "@/store/system/menu";
import { ParentProps, type Component } from "solid-js";

export interface MainProps extends ParentProps {}

const Main: Component<MainProps> = (props) => {
  const sysMenuStore = useSysMenuStore();

  return (
    <>
    {props.children}
    </>
  );
};

export default Main;
