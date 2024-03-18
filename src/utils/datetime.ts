/**
 * 获取中文周几
 * @param num 0-6，0为周日
 * @returns
 */
export function getWeekInChinese(num: number): string {
  if (num < 0 || num > 6) {
    return "";
  }

  switch (num) {
    case 0:
      return "周日";
    case 1:
      return "周一";
    case 2:
      return "周二";
    case 3:
      return "周三";
    case 4:
      return "周四";
    case 5:
      return "周五";
    case 6:
      return "周六";
  }
  return "";
}
