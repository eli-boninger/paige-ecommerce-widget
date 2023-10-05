"use client";
import { Product } from "@/models/product";
import { Dispatch, createContext } from "react";

export const ProductsContext = createContext<Product[]>([]);
export const ProductsDispatchContext = createContext<
  Dispatch<{
    type: string;
    product: Product;
  }>
>({} as Dispatch<{ type: string; product: Product }>);
