"use client";
import { useContext, useState } from "react";
import { ProductsContext } from "./productsContext";
import { ProductsTable } from "./productsTable";
import { FilterButton } from "./filterButton";

export default function ProductsPage() {
  // null indicating no filter selection
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(
    null
  );
  const { products } = useContext(ProductsContext);
  const colors = new Set(products.map((p) => p.color.toLocaleLowerCase()));

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
            ? products.filter(
                (p) => p.color.toLocaleLowerCase() === selectedColorFilter
              )
            : products
        }
      />
    </div>
  );
}
