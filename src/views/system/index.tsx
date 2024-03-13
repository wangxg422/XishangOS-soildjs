import ClassLayout from "@/layout/classLayout";
import { ParentProps, type Component } from "solid-js";

export interface SystemProps extends ParentProps {}

const System: Component<SystemProps> = (props) => {
  return (
    <>
       <ClassLayout>{props.children}</ClassLayout> 
    </>
  );
};

export default System;
