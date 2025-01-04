import { getCurrentDate } from "@/app/utils/utils";
import { handleDownloadProps } from "./@types";

export const handleDownload = ({
  downloadFileUrl,
  setIsDownload,
}: handleDownloadProps) => {
  const link = document.createElement("a");
  const currentDate = getCurrentDate();
  const fileName = `curriculo-pablo-moureira-${currentDate}.pdf`;
  link.href = downloadFileUrl;
  link.download = fileName;
  link.click();
  setIsDownload(true);
};
