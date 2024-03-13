import { ParentProps, type Component } from "solid-js";

export interface FooterProps extends ParentProps {}

const Footer: Component<FooterProps> = (props) => {
  return (
    <>
    <div class="w-full h-full border-t flex justify-center items-center">XishangOS</div>
    </>
  );
};

export default Footer;
