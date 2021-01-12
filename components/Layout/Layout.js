import Head from "next/head";
import Navbar from "../NavBar/NavBar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Quản lý nhân viên</title>
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
