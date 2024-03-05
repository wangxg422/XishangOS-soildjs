import { onMount, onCleanup } from "solid-js";
import dayjs from "dayjs";
import bgImage from "../../assets/images/bg.jpg";

export default function Desktop() {
  let dateTime = $signal({
    time: "",
    date: "",
    week: "",
  });

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
      week: now.day() + "",
    };
  };

  return (
    <>
    {/* bg-[url(${bgImage})] */}
      <div class={`desktop h-600 w-full bg-cover`} style={{'background-image': `url(${bgImage})`}}>
        <div class="datetime">
          <div class="time">{dateTime.time}</div>
          <div class="date">
            {dateTime.date}
            {dateTime.week}
          </div>
        </div>
      </div>
    </>
  );
};
