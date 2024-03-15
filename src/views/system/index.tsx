import Layout from "@/layout";
import { ParentProps, type Component } from "solid-js";

export interface SystemProps extends ParentProps {}

const System: Component<SystemProps> = (props) => {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default System;
