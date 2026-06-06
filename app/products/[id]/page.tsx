"use cache"

import { getFeaturedProducts } from "@/lib/products/product-select";

export const generteStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
};


//dynamic route syntax
export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Product ID: {id}</div>;
}
