import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { getHomePageProducts } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <Layout>
      <div>
        <div className="grid text-center text-6xl italic justify-center pt-14">
          <h1>Welcome to Gianni's Shop</h1>
          <p>Bitches.</p>
        </div>

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
