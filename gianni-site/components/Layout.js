import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="bg-space-pattern bg-fixed">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <main className="bg-white bg-opacity-30 mt-20">{children}</main>

      <footer className="bg-red text-red-50 text-center text-2xl mt-52 pb-7">
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Gianni's Closet",
  description: "A wide and valuable selection of shoes and clothing",
  keywords: "shoes, nike, clothes, shirts",
};
