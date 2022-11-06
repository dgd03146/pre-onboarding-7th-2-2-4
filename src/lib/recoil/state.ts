import { atom } from "recoil";
import { recoilKeys } from "./keys";

export const startState = atom<Date>({
  key: recoilKeys.startDate,
  default: new Date("2022-02-01")
});

export const endState = atom<Date>({
  key: recoilKeys.endDate,
  default: new Date("2022-02-08")
});

export const firstFilterState = atom<string>({
  key: recoilKeys.firstFilter,
  default: "ROAS"
});

export const secondFilterState = atom<string>({
  key: recoilKeys.secondFilter,
  default: "클릭 수"
});
