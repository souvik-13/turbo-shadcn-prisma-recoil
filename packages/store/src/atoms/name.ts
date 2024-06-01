import { atom } from "recoil";

export const nameAtom = atom<string>({
  key: "name",
  default: "Souvik",
});