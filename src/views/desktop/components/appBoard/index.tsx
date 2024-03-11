import { onMount, For } from "solid-js";
import { desktopAppApi } from "@/api/modules/app";
import { App } from "@/interface/app";
import AppItem from "../appInstance";

export default function AppBoard() {
  let appList: App.Instance[] = $signal([]);

  const getAppInstanceList = async () => {
    const res = await desktopAppApi();
    appList = res;
  }
  onMount(() => {
    getAppInstanceList();
  });

  return (
    <>
      <div class="grid grid-rows-5 grid-flow-col justify-start">
        <For each={appList}>
          {(app) => (
            <div>
              <AppItem appInstanceInfo={app} />
            </div>
          )}
        </For>
      </div>
    </>
  );
}
