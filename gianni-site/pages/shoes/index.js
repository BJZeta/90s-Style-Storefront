import Layout from "../../components/Layout";

export default function ShoesPage({  }) {
  return (
    <Layout
      title="Gianni's Collection"
      description="A full collection of vintage, classic shoes from Gianni"
    >
      <h1>All Products</h1>
      <div className="all-shoes">
        <h2>Shoes</h2>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
  
//   const {fetchAllProducts} = useContext(ShopContext)

//   const products = fetchAllProducts();

//   return {
//     props: { products },
//   };
// }
