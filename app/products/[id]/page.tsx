import { getProduct, products } from "../../data/products";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="store-container">
      <Link href="/">← Back to collection</Link>

      <section className="product-detail">
        <p className="product-category">{product.category}</p>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <p>Color: {product.color}</p>

        <h2>₹{product.price.toLocaleString("en-IN")}</h2>
      </section>
    </main>
  );
}
