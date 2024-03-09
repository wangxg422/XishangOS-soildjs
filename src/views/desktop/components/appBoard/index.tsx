import { onMount, For } from "solid-js";
import { getDesktopApp } from "@/api/modules/app";
import { App } from "@/interface/app";
import AppItem from "../appItem";

export default function AppBoard() {
  let appList: App[] = $signal([]);

  onMount(() => {
    appList = getDesktopApp();
  });

  return (
    <>
      <div class="grid grid-rows-5 grid-flow-col justify-start">
        <For each={appList}>
          {(app) => (
            <div>
              <AppItem appInfo={app} />
            </div>
          )}
        </For>
      </div>
    </>
  );
}
