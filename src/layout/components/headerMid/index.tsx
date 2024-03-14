import { useSysMenuStore } from "@/store/system/menu";
import { ParentProps, type Component } from "solid-js";

export interface HeaderMidProps extends ParentProps {}

const HeaderMid: Component<HeaderMidProps> = () => {
  const sysMenuStore = useSysMenuStore();

  return (
    <>
      <div class="h-full w-full flex justify-start items-end">
        <For each={sysMenuStore.breadcrumb}>{(b) => <>{b.title}</>}</For>
      </div>
    </>
  );
};

export default HeaderMid;
