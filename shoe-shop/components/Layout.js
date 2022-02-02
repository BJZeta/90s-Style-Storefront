import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <div className="main-content">{children}</div>

      <footer>
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Gianni's Shop",
  description: "A wide and valuable selection of shoes and clothing",
  keywords: "shoes, nike, clothes",
};
