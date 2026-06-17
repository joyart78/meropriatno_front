import type { IconName } from "../../../shared/ui/Icon";

export interface Service {
  icon: IconName;
  iconColor: "pink" | "yellow" | "orange" | "purple";
  title: string;
  text: string;
}
