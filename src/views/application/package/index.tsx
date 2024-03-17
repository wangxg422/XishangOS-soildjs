import { ParentProps, type Component } from "solid-js";

export interface AppPackageProps extends ParentProps {}

const AppPackage: Component<AppPackageProps> = (props) => {
  return (
    <>
    <div>AppPackage</div>
    </>
  );
};

export default AppPackage;