import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return `${techMap[normalizedTechName]} colored` || "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Define time intervals in seconds
  const intervals = {
    year: 365 * 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    week: 7 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  // Handle future dates
  if (diffInSeconds < 0) {
    return "just now";
  }

  // Handle very recent times
  if (diffInSeconds < 10) {
    return "just now";
  }

  // Find the appropriate time unit
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / secondsInUnit);

    if (interval >= 1) {
      if (interval === 1) {
        return `1 ${unit} ago`;
      } else {
        // Handle pluralization
        const pluralUnit =
          unit === "day"
            ? "days"
            : unit === "hour"
              ? "hours"
              : unit === "minute"
                ? "minutes"
                : unit === "second"
                  ? "seconds"
                  : unit === "week"
                    ? "weeks"
                    : unit === "month"
                      ? "months"
                      : "years";

        return `${interval} ${pluralUnit} ago`;
      }
    }
  }

  return "just now";
};
