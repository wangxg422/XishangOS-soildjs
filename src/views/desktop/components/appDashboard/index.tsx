import { allAppApi } from "@/api/modules/app";
import { App } from "@/interface/app";
import { onMount } from "solid-js";
import AppInstance from "../appInstance";

export default function AppDashboard() {
  let appList: App.Instance[] = $signal([]);

  const getAllAppInstance = async () => {
    const res = await allAppApi();
    appList = res;
  }
  onMount(() => {
    getAllAppInstance();
  });

  return (
    <>
      <div class="grid grid-cols-8 gap-y-6 items-start">
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
