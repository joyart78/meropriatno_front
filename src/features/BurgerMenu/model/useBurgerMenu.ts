import { useDispatch, useSelector } from "react-redux";
import { toggle, close } from "./menuSlice";
import type { RootState } from "../../../app/store";

export function useBurgerMenu() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch();

  return {
    isOpen,
    toggle: () => dispatch(toggle()),
    close: () => dispatch(close()),
  };
}
