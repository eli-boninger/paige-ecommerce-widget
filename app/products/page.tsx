"use client";
import { useContext, useState } from "react";
import { ProductsContext } from "./productsContext";
import { ProductsTable } from "./productsTable";
import { FilterButton } from "./filterButton";

export default function ProductsPage() {
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(
    null
  );
  const { products } = useContext(ProductsContext);
  const colors = new Set(products.map((p) => p.color));

  const filter = (color: string | null) => {
    setSelectedColorFilter(color);
  };

  return (
    <div>
      <FilterButton
        colors={Array.from(colors)}
        selectedColor={selectedColorFilter}
        onColorSelect={filter}
      />
      <ProductsTable
        products={
          selectedColorFilter
            ? products.filter((p) => p.color === selectedColorFilter)
            : products
        }
      />
    </div>
  );
}
