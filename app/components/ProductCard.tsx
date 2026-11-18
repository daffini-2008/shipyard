
import Link from "next/link";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-card-content">
        <span className="product-category">{product.category}</span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <p className="product-color">Color: {product.color}</p>

        <h3>₹{product.price.toLocaleString("en-IN")}</h3>

        <span className="view-product">View Product →</span>
      </div>
    </Link>
  );
}

