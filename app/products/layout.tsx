"use client";
import productFixturesJson from "@/json/product-fixtures.json";
import { Product } from "@/models/product";
import { useReducer } from "react";
import { ProductsContext, ProductsDispatchContext } from "./productsContext";

function productsReducer(
  products: Product[],
  action: { type: string; product: Product }
) {
  switch (action.type) {
    case "changed": {
      return products.map((p) => {
        if (p.sku === action.product.sku) {
          return action.product;
        } else {
          return p;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, dispatch] = useReducer(
    productsReducer,
    productFixturesJson as Product[]
  );

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>
        <h1>Paige products</h1>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}
