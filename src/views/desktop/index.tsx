import { onMount, onCleanup } from "solid-js";
import dayjs from "dayjs";
import bgImage from "@/assets/images/bg.jpg";
import appDashboardImg from "@/assets/images/default_app_dashboard.svg";
import "./index.scss";
import { getWeekInChinese } from "@/utils/datetime";
import AppBoard from "./components/appBoard";

export default function Desktop() {
  let dateTime = $signal({
    time: "",
    date: "",
    week: 0,
  });
  let isShowAppDashboard = $signal(false);

  let timerId: NodeJS.Timeout;

  onMount(() => {
    getCurrentDateTime();
    timerId = setInterval(getCurrentDateTime, 1000);
  });
  onCleanup(() => clearInterval(timerId));

  const getCurrentDateTime = () => {
    const now = dayjs();
    dateTime = {
      time: now.format("HH:mm:ss"),
      date: now.format("YYYY 年 MM 月 DD 日"),
      week: now.day(),
    };
  };

  const showAppDashboard = () => {
    isShowAppDashboard = !isShowAppDashboard;
  };

  return (
    <>
      {/* bg-[url(${bgImage})] */}
      <Show when={!isShowAppDashboard}>
        <div
          class={`desktop h-screen w-screen bg-cover`}
          style={{ "background-image": `url(${bgImage})` }}
        >
          <div class="datetime text-white">
            <div class="text-6xl font-medium">{dateTime.time}</div>
            <div class="text-xl font-bold mt-2">
              <span>{dateTime.date}</span>
              <span class="ml-2">{getWeekInChinese(dateTime.week)}</span>
            </div>
          </div>
          <div class="app-board">
            <AppBoard />
          </div>
          <div class="app-dashboard w-14 h-14 text-white" onclick={showAppDashboard}>
            <img src={appDashboardImg} alt="appDashboard" />
          </div>
        </div>
      </Show>
      <Show when={isShowAppDashboard}>
        <div>xx</div>
      </Show>
    </>
  );
}
