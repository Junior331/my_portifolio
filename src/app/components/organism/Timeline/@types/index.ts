import { ReactNode } from "react";

interface TimelineEntry {
  title: string;
  content: ReactNode;
}
export interface Props {
  data: TimelineEntry[];
}
