import Layout from "../components/Layout";
import { getHomePageProducts } from "../lib/shopify";
import styles from "../styles/Home.module.css";

export default function Home({products}) {
  console.log(products)

  return (
    <Layout>
      <div>
        <h1>Welcome to Gianni's Shop</h1>
        <p>Bitches.</p>
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
