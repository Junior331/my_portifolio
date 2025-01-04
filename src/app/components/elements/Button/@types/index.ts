import { Dispatch, SetStateAction } from "react";

export interface AnimatedSubscribeButtonProps {
  buttonColor?: string;
  downloadFileUrl: string;
  downloadStatus: boolean;
  buttonTextColor?: string;
  changeText: React.ReactElement | string;
  initialText: React.ReactElement | string;
}
export type handleDownloadProps ={
  downloadFileUrl: string;
  setIsDownload: Dispatch<SetStateAction<boolean>>;
}