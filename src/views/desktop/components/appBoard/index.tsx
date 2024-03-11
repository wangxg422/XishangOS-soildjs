import { onMount, For } from "solid-js";
import { desktopAppApi } from "@/api/modules/app";
import { App } from "@/interface/app";
import AppInstance from "../appInstance";

export default function AppBoard() {
  let appList: App.Instance[] = $signal([]);

  const getAppInstanceList = async () => {
    const res = await desktopAppApi();
    appList = res;
  }
  onMount(() => {
    getAppInstanceList();
  });

  const gridStyle = {
    "display": "grid",
    "grid-auto-flow": "column",
    "grid-template-rows": `repeat(auto-fill, 92px)`,
    "gap": "20px",
    "justify-content": "flex-start",
    "align-items": "center",
    "justify-items": "center"
  }
  return (
    <>
      <div class="app-board" style={gridStyle}>
        <For each={appList}>
          {(app) => (
            <div>
              <AppInstance appInstanceInfo={app} />
            </div>
          )}
        </For>
      </div>
    </>
  );
}
