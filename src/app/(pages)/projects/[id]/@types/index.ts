import { Dispatch, SetStateAction } from "react";

import { Snackbar } from "@/app/contexts/Snackbar";
import { httpClientResponse, httpRequest, Product, ProductSummary } from "@/app/utils/types";

export type productProps = {
  params: { id: string };
};

export type fetchProductProps = {
  id: string;
  request: (data: httpRequest) => Promise<httpClientResponse<Product>>;
};

export type UpdateProductProps = {
  id: string;
  data: ProductSummary;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<ProductSummary>>;
};