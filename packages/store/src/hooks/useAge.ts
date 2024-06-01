import { useRecoilValue } from "recoil";
import { ageAtom } from "../atoms/age";

export const useAge = () => {
  const value = useRecoilValue(ageAtom);
  return value;
};
