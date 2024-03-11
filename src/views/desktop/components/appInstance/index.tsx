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

  const iconBg = {
      "background": `rgba(255, 255, 255, 0.90)`,
      "-webkit-backdrop-filter": `blur(5px)`,
      "backdrop-filter": `blur(5px)`,
      "transition": `0.5s ease`
  }

  return (
    <>
      <div class="cursor-pointer hvr-pulse-shrink flex flex-col items-center" onclick={clickApp}>
        <div class={`w-16 h-16 rounded-md flex items-center justify-center`} style={iconBg}>
          <div class="w-12 h-12">
            <img src={icon} alt="app" />
          </div>
        </div>
        <div class="app-name text-white text-base mt-1 hover:font-bold">
          {appInstance.instanceName}
        </div>
      </div>
    </>
  );
}
