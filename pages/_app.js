import "../styles/globals.scss";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div id="modal"></div>
    </Layout>
  );
}

export default MyApp;
