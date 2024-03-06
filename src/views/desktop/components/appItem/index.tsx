import defaultAppImg from "@/assets/images/default_app.png";
import "./index.scss";

export default function App(props: any) {
    const clickApp = () => {
        window.location.href = props.appInfo.appAddress
    }

    const icon = props.appInfo.appIcon ? props.appInfo.appIcon : defaultAppImg
    return <>
    <div class="app-item p-3 flex flex-col items-center" onclick={clickApp}>
        <div class="app-icon w-16 h-16"><img src={ icon } alt="app" /></div>
        <div class="app-name text-white text-md pt-1">{props.appInfo.appName}</div>
    </div>
    </>
}