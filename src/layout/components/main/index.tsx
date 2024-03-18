import { ParentProps, type Component } from "solid-js";
import TabBar from "../tabBar";

export interface MainProps extends ParentProps {}

const Main: Component<MainProps> = props => {
  return (
    <>
      <div>
        <TabBar />
      </div>
      <div class="px-1 py-1">{props.children}</div>
    </>
  );
};

export default Main;
