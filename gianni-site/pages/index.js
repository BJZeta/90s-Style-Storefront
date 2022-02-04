import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { getHomePageProducts } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <Layout>
      <div>

        <h1>Welcome to Gianni's Shop</h1>
        <p>Bitches.</p>

        <div className="text-3xl">
          <ProductList products={products} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await getHomePageProducts();

  return {
    props: { products },
  };
}
