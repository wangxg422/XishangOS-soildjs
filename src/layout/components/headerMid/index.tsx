import { ParentProps, type Component } from "solid-js";
import { useSysMenuBreadcrumbStore } from "@/store/system/menu/breadcrumbStore";
import Breadcrumb from "../breadcrumb";

export interface HeaderMidProps extends ParentProps {}

const HeaderMid: Component<HeaderMidProps> = () => {
  const breadcrumbList = useSysMenuBreadcrumbStore(state => state.breadcrumb);

  return (
    <>
      <div class="h-full w-full">
        <Breadcrumb />
      </div>
    </>
  );
};

export default HeaderMid;
