import React from "react";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About Gianni">
      <div className="w-100 pt-48 pb-96 text-center">
        <h2 className="text-3xl">About Me</h2>
        <p className="text-xl">
          There ain't shit to learn about me. Buy my shit
        </p>
      </div>
    </Layout>
  );
}
