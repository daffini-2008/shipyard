
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  color: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    price: 2499,
    category: "Footwear",
    description: "Comfortable everyday sneakers.",
    color: "Ocean Blue",
    image: "/products/wave-runner.jpg",
  },
  {
    id: "cloud-headphones",
    name: "Cloud Headphones",
    price: 3999,
    category: "Electronics",
    description: "Wireless headphones with immersive sound.",
    color: "Pearl White",
    image: "/products/cloud-headphones.jpg",
  },
  {
    id: "urban-backpack",
    name: "Urban Backpack",
    price: 1799,
    category: "Accessories",
    description: "A practical backpack for everyday travel.",
    color: "Midnight Black",
    image: "/products/urban-backpack.jpg",
  },
  {
    id: "classic-watch",
    name: "Classic Watch",
    price: 2999,
    category: "Accessories",
    description: "A timeless minimalist watch.",
    color: "Silver",
    image: "/products/classic-watch.jpg",
  },
  {
    id: "retro-camera",
    name: "Retro Camera",
    price: 5499,
    category: "Electronics",
    description: "A compact camera inspired by classic photography.",
    color: "Vintage Brown",
    image: "/products/retro-camera.jpg",
  },
  {
    id: "cozy-lamp",
    name: "Cozy Lamp",
    price: 1299,
    category: "Home",
    description: "A warm ambient lamp for your workspace.",
    color: "Warm Beige",
    image: "/products/cozy-lamp.jpg",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
