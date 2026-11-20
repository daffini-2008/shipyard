"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="store-container">
      <h1>Something went wrong!</h1>
      <p>We couldn't load this page. Please try again.</p>
      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}
