import { onMount, onCleanup } from "solid-js";
import dayjs from "dayjs";
import defaultBgImage from "@/assets/images/bg.jpg";
import "./index.scss";
import { getWeekInChinese } from "@/utils/datetime";
import AppBoard from "./components/appBoard";
import { IoApps } from "solid-icons/io";
import { AiOutlineSearch } from "solid-icons/ai";
import AppDashboard from "./components/appDashboard";
import { getInputValue } from "@/utils/element";
import Avatar from "@/layout/components/avatar";

export default function Desktop() {
  let dateTime = $signal({
    time: "",
    date: "",
    week: 0,
  });
  let isShowAppDashboard = $signal(false);
  let searchContent = $signal("");
  let bgImage = $signal(defaultBgImage);

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

  const searchInputClick = (e: Event) => {
    e.stopPropagation();
  };

  const searchInput = (e: Event) => {
    filterApp(getInputValue(e));
  };

  const filterApp = (content: string) => {
    // TODO 根据查找条件检索应用
  }

  const searchIconClick = (e: Event) => {
    filterApp(searchContent);
    e.stopPropagation();
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
          <div class="h-full w-1/2 py-4 px-2">
            <AppBoard />
          </div>
          <div class="header-right mt-2 mr-2 text-white"><Avatar /></div>
          <div
            class="app-dashboard-btn text-white bg-[#171b24] px-4 py-2 rounded-lg flex justify-center items-center"
            onclick={() => (isShowAppDashboard = true)}
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
          onclick={() => (isShowAppDashboard = false)}
        >
          <div class="w-full h-1/6 hover:cursor-pointer flex flex-col justify-center items-center">
            <div class="w-full max-w-xs text-white flex justify-center items-center">
              <input
                type="text"
                placeholder="搜索"
                class="search-input border-none w-5/6"
                onclick={searchInputClick}
                oninput={searchInput}
              />
              <AiOutlineSearch size={32} color="gray" onclick={searchIconClick} />
            </div>
          </div>
          <div class="h-5/6 w-full">
            <AppDashboard />
          </div>
          <div class="inner"></div>
        </div>
      </Show>
    </>
  );
}
