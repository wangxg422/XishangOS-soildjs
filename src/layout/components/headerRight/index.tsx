import { ParentProps, type Component } from "solid-js";
import Avatar from "@/layout/components/avatar";

export interface HeaderRightProps extends ParentProps {}

const HeaderRight: Component<HeaderRightProps> = (props) => {
  return (
    <>
      <Avatar />
    </>
  );
};

export default HeaderRight;
