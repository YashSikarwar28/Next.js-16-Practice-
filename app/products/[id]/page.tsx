type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function Product({
  params,
}: ProductPageProps) {
  return (
    <div>
      Product ID: {params.id}
    </div>
  );
}