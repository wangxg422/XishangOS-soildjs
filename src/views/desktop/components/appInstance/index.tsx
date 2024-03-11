import defaultAppImg from "@/assets/images/default_app.png";
import "./index.scss";
import { App } from "@/interface/app";

export default function AppInstance(props: any) {
  let isShrink = $signal(false);
  let isClick = $signal(false);
  let isLongMouseDown = $signal(false);

  const clickApp = (e: Event) => {
    // 非长按即是点击操作
    if (!isLongMouseDown) {
      isClick = true;
      isShrink = false;
      isLongMouseDown = false;
      window.open(appInstance.instanceAddress, "_blank");
      e.stopPropagation();
    }
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
    isLongMouseDown = false;
  };

  const mouseDown = () => {
    setTimeout(() => {
      if (!isClick) {
        isLongMouseDown = true;
      }
    }, 1000);
  };

  return (
    <>
      <div
        class="flex justify-center items-start"
        onmouseover={mouseOver}
        onmouseleave={mouseLeave}
        onmousedown={mouseDown}
        onclick={clickApp}
      >
        <div
          class={`cursor-pointer flex flex-col items-center ${
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
        <Show when={isLongMouseDown}>
          <div class="w-16 h-16 bg-[#171a21] rounded-md">opt</div>
        </Show>
      </div>
    </>
  );
}
