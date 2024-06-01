import { useRecoilValue } from "recoil";
import { nameAtom } from "../atoms/name";

export const useName = () => {
  const value = useRecoilValue(nameAtom);
  return value;
};