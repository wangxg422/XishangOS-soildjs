import { allAppApi } from "@/api/modules/app";
import { App } from "@/interface/app";
import { onMount } from "solid-js";
import AppInstance from "../appInstance";

export default function AppDashboard() {
  let appList: App.Instance[] = $signal([]);

  const getAllAppInstance = async () => {
    const res = await allAppApi();
    appList = res;
  };
  onMount(() => {
    getAllAppInstance();
  });

  const gridStyle = {
    display: "grid",
    "grid-template-columns": `repeat(auto-fill, 120px)`,
    gap: "24px",
    "justify-content": "space-between",
    "align-items": "center",
    "justify-items": "center"
  };

  return (
    <>
      <div style={gridStyle}>
        <For each={appList}>
          {app => (
            <div>
              <AppInstance appInstanceInfo={app} />
            </div>
          )}
        </For>
      </div>
    </>
  );
}
