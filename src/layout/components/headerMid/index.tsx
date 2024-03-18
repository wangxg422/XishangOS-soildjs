import { ParentProps, type Component } from "solid-js";
import Breadcrumb from "../breadcrumb";

export interface HeaderMidProps extends ParentProps {}

const HeaderMid: Component<HeaderMidProps> = () => {
  return (
    <>
      <div class="h-full w-full">
        <Breadcrumb />
      </div>
    </>
  );
};

export default HeaderMid;
