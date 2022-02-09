import React from "react";
import { getAllProducts, getSingleProduct } from "../../lib/shopify";
import Layout from "../../components/Layout";

export default function ShoePage({ product }) {
  return <div>{product.title}</div>;
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product) => {
    const handle = String(product.node.handle);

    return {
      params: { product: handle },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getSingleProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
