export type HoroscopeDay = "yesterday" | "today" | "tomorrow";

export type HoroscopeApiResponse = {
  description?: string;
  mood?: string;
  color?: string;
  lucky_number?: string;
  lucky_time?: string;
  compatibility?: string;
};

export type HoroscopeResult =
  | (HoroscopeApiResponse & { sign: string; day: HoroscopeDay })
  | { error: string };
