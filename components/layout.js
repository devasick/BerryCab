import Navbar from "./navbar";
import Footer from "./footer";
import Data from "../pages/api/data.json";
import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar headerData={Data.header} />
      <div>
        <main>{children}</main>
      </div>
      <Footer footerData={Data.footer} />
    </>
  );
};
export default Layout;
