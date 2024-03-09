import { onMount, onCleanup } from "solid-js";
import dayjs from "dayjs";
import bgImage from "@/assets/images/bg.jpg";
import "./index.scss";
import { getWeekInChinese } from "@/utils/datetime";
import AppBoard from "./components/appBoard";
import { IoApps } from "solid-icons/io";
import { AiOutlineSearch } from "solid-icons/ai";
import AppDashboard from "./components/appDashboard";
import { HiOutlineXMark } from 'solid-icons/hi'

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
    timerId = setInterval(getCurrentDateTime, 60000);
  });
  onCleanup(() => clearInterval(timerId));

  const getCurrentDateTime = () => {
    const now = dayjs();
    dateTime = {
      time: now.format("HH:mm"),
      date: now.format("YYYY 年 MM 月 DD 日"),
      week: now.day(),
    };
  };

  const showAppDashboard = () => {
    isShowAppDashboard = !isShowAppDashboard;
  };

  const toDesktop = () => {
    isShowAppDashboard = false;
  };

  return (
    <>
      {/* bg-[url(${bgImage})] */}
      <Show when={!isShowAppDashboard}>
        <div
          class={`desktop h-screen w-screen bg-cover`}
          style={{ "background-image": `url(${bgImage})` }}
        >
          <div class="datetime text-white flex flex-col items-center">
            <div class="text-6xl font-medium">{dateTime.time}</div>
            <div class="text-xl font-bold mt-2">
              <span>{dateTime.date}</span>
              <span class="ml-2">{getWeekInChinese(dateTime.week)}</span>
            </div>
          </div>
          <div class="app-board">
            <AppBoard />
          </div>
          <div class="header-right text-white text-xl">XishangOS</div>
          <div
            class="app-dashboard-btn text-white bg-[#171b24] px-4 py-2 rounded-lg flex justify-center items-center"
            onclick={showAppDashboard}
          >
            <IoApps size={20} />
            <div class="ml-2">全部应用</div>
          </div>
        </div>
      </Show>
      <Show when={isShowAppDashboard}>
        <div
          class="app-dashboard h-screen w-screen bg-cover flex flex-col justify-center items-center"
          style={{ "background-image": `url(${bgImage})` }}
          onclick={toDesktop}
        >
          <div class="w-full h-1/6 flex flex-col justify-center items-center">
            <div class="w-full max-w-xs border-b-2 border-b-gray-950 flex justify-center items-center">
              <input
                type="text"
                placeholder="搜索"
                class="search-input border-none"
              />
              <AiOutlineSearch size={32} />
            </div>
          </div>
          <div class="h-5/6 w-full">
            <AppDashboard />
          </div>
        </div>
      </Show>
    </>
  );
}
