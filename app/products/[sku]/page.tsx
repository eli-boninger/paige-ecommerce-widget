import productFixturesJson from "@/json/product-fixtures.json";
import { Product } from "@/models/product";
import { ProductForm } from "./productForm";

export async function generateStaticParams() {
  const products = productFixturesJson as Product[];

  return products.map((p) => ({
    sku: p.sku,
  }));
}

export default function Page({ params }: { params: { sku: string } }) {
  return (
    <div>
      <ProductForm productSku={params.sku} />
    </div>
  );
}
