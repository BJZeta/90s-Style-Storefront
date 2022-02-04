import { getHomePageProducts } from "../lib/shopify";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
