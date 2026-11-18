import Link from "next/link";

export default function NotFound() {
  return (
    <main className="store-container">
      <h1>404 - Product Not Found</h1>

      <p>Oops! We couldn't find the product you're looking for.</p>

      <Link href="/">Back to ShipYard</Link>
    </main>
  );
}
