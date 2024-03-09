import { getAllApp } from "@/api/modules/app";
import { App } from "@/interface/app";
import { onMount } from "solid-js";
import AppItem from "../appItem";

export default function AppDashboard() {
  let apps: App[] = $signal([]);

  onMount(() => {
    apps = getAllApp();
  });

  return (
    <>
      <div class="grid grid-cols-8 items-start">
        <For each={apps}>
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
