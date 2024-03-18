import { ParentProps, type Component } from "solid-js";
import { RiSystemApps2Fill } from "solid-icons/ri";
import { AiOutlineRight } from "solid-icons/ai";
import { MenuTypeEnum } from "@/utils/enums/menu";
import { A } from "@solidjs/router";
import { useSysMenuStore } from "@/store/system/menu";

export interface BreadcrumbProps extends ParentProps {}

const Breadcrumb: Component<BreadcrumbProps> = props => {
  const breadcrumbList = useSysMenuStore(state => state.breadcrumbList);

  return (
    <>
      <div class="w-full h-full flex justify-start items-center">
        <For each={breadcrumbList}>
          {(b, i) => {
            const icon = <RiSystemApps2Fill />;
            const separator = <AiOutlineRight />;

            let content;
            if (b.type === MenuTypeEnum.DIR) {
              content = (
                <div class="flex justify-center items-center">
                  <div class="mx-1">{i() !== 0 && separator}</div>
                  <div>{icon}</div>
                  <div class="mx-1">{b.title}</div>
                </div>
              );
            } else if (b.type === MenuTypeEnum.MENU) {
              content = (
                <div class="flex justify-center items-center">
                  <div class="mx-1">{i() !== 0 && separator}</div>
                  <div> {icon}</div>
                  <div class="mx-1 hover:font-bold">
                    <A href={b.path}>{b.title}</A>
                  </div>
                </div>
              );
            }

            return <div>{content}</div>;
          }}
        </For>
      </div>
    </>
  );
};

export default Breadcrumb;
