"use client";
import { Product } from "@/models/product";
import { Dispatch, createContext } from "react";

interface ProductsContextType {
  products: Product[];
  getProduct: (sku: string) => Product | undefined;
}

interface ProductsDispatchContextType
  extends Dispatch<{ type: string; product: Product }> {}

export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);
export const ProductsDispatchContext =
  createContext<ProductsDispatchContextType>({} as ProductsDispatchContextType);
