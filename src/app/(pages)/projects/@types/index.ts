import { Snackbar } from "@/app/contexts/Snackbar";
import {
  Product,
  httpRequest,
  ProductSummary,
  ProductsResponse,
  httpClientResponse,
} from "@/app/utils/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export type fetchProductsProps = {
  skip?: number;
  limit?: number;
  order?: string;
  sortBy?: string;
  search?: string;
  request: (data: httpRequest) => Promise<httpClientResponse<ProductsResponse>>;
};

export type AddNewProductProps = {
  data: ProductSummary;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenModalNewProduct: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<ProductSummary>>;
};

export type DeleteProductProps = {
  id: string;
  router: AppRouterInstance;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<Product>>;
};
