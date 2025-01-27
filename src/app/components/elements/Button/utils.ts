import { getCurrentDate } from "@/app/utils/utils";
import { handleDownloadProps } from "./@types";

export const handleDownload = ({
  downloadFileUrl,
  setIsDownload,
}: handleDownloadProps) => {
  if (!downloadFileUrl) return;
  const currentDate = getCurrentDate();

  const link = document.createElement("a");
  link.href = downloadFileUrl;
  link.download = `curriculo-jarilson-reis-${currentDate}.pdf`; // Nome fixo para testes
  document.body.appendChild(link); // Necessário para funcionar em alguns navegadores
  link.click();
  document.body.removeChild(link); // Remover o link após o clique
  setIsDownload(true);
};
