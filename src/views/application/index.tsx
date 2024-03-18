import Layout from "@/layout";
import { ParentProps, type Component } from "solid-js";

export interface ApplicationProps extends ParentProps {}

const Application: Component<ApplicationProps> = props => {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default Application;
