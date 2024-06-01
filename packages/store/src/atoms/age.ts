import { atom } from "recoil";

export const ageAtom = atom<number>({
  key: "age",
  default: 0,
});