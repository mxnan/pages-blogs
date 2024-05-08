import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//get formatted time
export const getFormattedPublishedAt = (publishedAt: string) => {
  const now = dayjs();
  const publishedAtDate = dayjs(publishedAt);

  const diffYears = now.diff(publishedAtDate, "year");
  const diffMonths = now.diff(publishedAtDate, "month");
  const diffWeeks = now.diff(publishedAtDate, "week");
  const diffDays = now.diff(publishedAtDate, "day");

  if (diffYears >= 1) {
    return `${diffYears} years ago`;
  } else if (diffMonths >= 1) {
    return `${diffMonths} months ago`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks} weeks ago`;
  } else if (diffDays >= 1 && diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return publishedAtDate.format("MMMM D, YYYY");
  }
};
