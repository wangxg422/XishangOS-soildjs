import defaultAppImg from "@/assets/images/default_app.png";
import "./index.scss";

export default function App(props: any) {
  let appBg = $signal("app-bg");

  const clickApp = () => {
    //window.location.href = props.appInfo.appAddress;
  };

  const icon = props.appInfo.appIcon ? props.appInfo.appIcon : defaultAppImg;
  return (
    <>
      <div class="app-item p-3 flex flex-col items-center" onclick={clickApp}>
        <div class={`${appBg} w-16 h-16 rounded-md flex items-center justify-center`}>
          <div class="w-12 h-12">
            <img src={icon} alt="app" />
          </div>
        </div>
        <div class="app-name text-white text-md pt-1">
          {props.appInfo.appName}
        </div>
      </div>
    </>
  );
}
