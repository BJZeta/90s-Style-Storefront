import { getHomePageProducts } from "../lib/shopify";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
