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
      <For each={appList}>
        {app => (
          <div>
            <AppItem appInfo={app} />
          </div>
        )}
      </For>
    </>
  );
}
