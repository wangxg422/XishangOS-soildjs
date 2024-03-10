import defaultAppImg from "@/assets/images/default_app.png";
import "./index.scss";
import { App } from "@/interface/app";

export default function AppInstance(props: any) {
  let appBg = $signal("app-bg");

  const clickApp = (e: Event) => {
    //window.location.href = props.appInfo.appAddress;
    e.stopPropagation()
  };

  const appInstance: App.Instance = props.appInstanceInfo;
  
  const icon = appInstance.instanceIcon ? appInstance.instanceIcon : defaultAppImg;
  return (
    <>
      <div class="app-item hvr-pulse-shrink p-3 flex flex-col items-center" onclick={clickApp}>
        <div class={`${appBg} w-16 h-16 rounded-md flex items-center justify-center`}>
          <div class="w-12 h-12">
            <img src={icon} alt="app" />
          </div>
        </div>
        <div class="app-name text-white text-md pt-1">
          {appInstance.instanceName}
        </div>
      </div>
    </>
  );
}
