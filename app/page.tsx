import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="store-container">
      <header className="store-header">
        <p className="store-label">WELCOME TO SHIPYARD</p>
        <h1>Find Your Next Favourite.</h1>
        <p className="store-description">
          Explore our collection of thoughtfully selected products.
        </p>
      </header>

      <section className="product-section">
        <h2>Our Collection</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
