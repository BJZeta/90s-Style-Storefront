import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { getHomePageProducts } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <Layout>
      <div className="mt-">
        <div className="grid text-center text-6xl italic justify-center pt-14">
          <h1>Welcome to Gianni's Closet</h1>
          <p>Bitches.</p>
        </div>

        <div className="max-w-2xl ml-64 py-16 px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Products
          </h2>
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
