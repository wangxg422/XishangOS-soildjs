import defaultAppImg from "@/assets/images/default_app.png";
import { App } from "@/interface/app";
import "./index.scss";

export default function AppInstance(props: any) {
  let isShrink = $signal(false);
  let isRightClick = $signal(false);

  const clickApp = (e: MouseEvent) => {
    const b = e.button;
    // 0左 1中 2右
    if (b === 0) {
      isShrink = false;
      window.open(appInstance.instanceAddress, "_blank");
    } else if (b === 2) {
      isRightClick = true;
      isShrink = true;
    } else {
    }
    e.stopPropagation();
  };

  const appInstance: App.Instance = props.appInstanceInfo;

  const icon = appInstance.instanceIcon
    ? appInstance.instanceIcon
    : defaultAppImg;

  const iconBg = {
    background: `rgba(255, 255, 255, 0.90)`,
    "-webkit-backdrop-filter": `blur(5px)`,
    "backdrop-filter": `blur(5px)`,
    transition: `0.5s ease`,
  };

  const mouseOver = () => {
    setTimeout(() => {
      isShrink = true;
    }, 1000);
  };

  const mouseLeave = () => {
    isShrink = false;
    isRightClick = false;
  };

  return (
    <>
      <div
        class="cursor-pointer flex justify-center items-start"
        onmousemove={mouseOver}
        onmouseleave={mouseLeave}
        onmousedown={clickApp}
      >
        <div
          class={`flex flex-col items-center ${
            isShrink ? "hvr-pulse-shrink" : ""
          }`}
        >
          <div
            class={`w-16 h-16 rounded-md flex items-center justify-center`}
            style={iconBg}
          >
            <div class="w-12 h-12">
              <img src={icon} alt="app" />
            </div>
          </div>
          <div class="app-name text-white text-base mt-1 hover:font-bold">
            {appInstance.instanceName}
          </div>
        </div>
        {/* <Show when={isRightClick}> */}
        <div class="w-16 h-16 bg-[#171a21] rounded-md">opt</div>
        {/* </Show> */}
      </div>
    </>
  );
}
