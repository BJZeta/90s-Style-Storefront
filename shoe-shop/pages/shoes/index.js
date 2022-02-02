// import { useContext } from "react";
// import Layout from "../../components/Layout";
// import { ShopContext } from "../../context/shopContext";

// export default function ShoesPage({ products }) {
//   return (
//     <Layout
//       title="Gianni's Collection"
//       description="A full collection of vintage, classic shoes from Gianni"
//     >
//       <h1>All Products</h1>
//       <div className="all-shoes">
//         {console.log(products)}
//       </div>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
  
//   const {fetchAllProducts} = useContext(ShopContext)

//   const products = fetchAllProducts();

//   return {
//     props: { products },
//   };
// }
