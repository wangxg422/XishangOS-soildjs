import { ParentProps, type Component } from "solid-js";

export interface AppInstanceProps extends ParentProps {}

const AppInstance: Component<AppInstanceProps> = (props) => {
  return (
    <>
    <div>AppInstance</div>
    </>
  );
};

export default AppInstance;
