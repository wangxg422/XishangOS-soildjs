import defaultAppImg from "@/assets/images/default_app.png";
import "./index.scss";
import { App } from "@/interface/app";

export default function AppInstance(props: any) {
  let appBg = $signal("app-bg");
  let isShrink = $signal(false);

  const clickApp = (e: Event) => {
    window.open(appInstance.instanceAddress,'_blank')
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

  const mouseOver = () => {
    setTimeout(() => {
      isShrink = true;
    }, 1500);
  }

  const mouseLeave = () => {
    isShrink = false;
  }

  return (
    <>
      <div class={`cursor-pointer flex flex-col items-center ${ isShrink ? "hvr-pulse-shrink" : ""}`} onclick={clickApp} onmouseover={mouseOver} onmouseleave={mouseLeave}>
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
