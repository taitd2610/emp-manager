import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import { Brightness6Rounded } from "@material-ui/icons";
import { useState, useEffect } from "react";

const Layout = ({ children, title = "Quản lý nhân viên" }) => {
  // 1. Set theme to app
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  //

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <div className={styles.header_name}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 512 512"
            >
              <path
                d="M456.403,64.129h-48.611V15.516C407.792,6.96,400.832,0,392.276,0h-16.032c-8.556,0-15.516,6.96-15.516,15.516v48.613
			h-224.97c-8.556,0-15.517,6.96-15.517,15.516v70.071L52.883,82.358c-2.145-2.146-5.372-2.786-8.173-1.626
			c-2.803,1.161-4.63,3.896-4.63,6.929v304.613c0,4.142,3.358,7.5,7.5,7.5h72.661v24.563c0,4.142,3.358,7.5,7.5,7.5
			c4.142,0,7.5-3.358,7.5-7.5v-24.563h216.952c3.034,0,5.768-1.827,6.929-4.63c1.161-2.803,0.519-6.028-1.626-8.173L135.242,164.716
			V79.645c0-0.285,0.232-0.516,0.517-0.516h224.97V256c0,0.697,0.097,1.39,0.289,2.061l16.032,56.113
			c0.92,3.22,3.863,5.439,7.211,5.439c3.348,0,6.292-2.22,7.211-5.439l16.032-56.113c0.191-0.67,0.289-1.364,0.289-2.061V119.726
			c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v120.758h-17.064V47.064h17.064v40.595c0,4.142,3.358,7.5,7.5,7.5
			c4.142,0,7.5-3.358,7.5-7.5v-8.53h48.611c0.285,0,0.516,0.231,0.516,0.516v376.758c0,22.385-18.211,40.597-40.597,40.597
			c-20.092,0-37.371-14.972-40.191-34.827c-1.075-7.565-7.65-13.27-15.294-13.27H88.474c-4.696,0-9.107,2.083-12.101,5.714
			c-2.893,3.51-4.062,8.047-3.206,12.449C78.229,493.103,101.182,512,127.742,512h288.581c30.656,0,55.597-24.94,55.597-55.597
			V79.645C471.919,71.089,464.959,64.129,456.403,64.129z M334.087,384.775H55.081v-0.001V105.768L334.087,384.775z
			 M392.639,255.484l-8.379,29.329l-8.38-29.329H392.639z M392.792,32.064h-17.064V15.516c0-0.285,0.231-0.516,0.516-0.516h16.032
			c0.285,0,0.516,0.231,0.516,0.516V32.064z M127.742,497c-19.396,0-36.155-13.793-39.854-32.745
			c0.027-0.085,0.255-0.352,0.587-0.352h272.363c0.226,0,0.412,0.16,0.443,0.38c1.833,12.902,8.118,24.299,17.157,32.717H127.742z"
                fill="#21b6b7"
              />

              <path
                d="M245.271,338.874l-144.291-144.29c-2.145-2.146-5.372-2.786-8.173-1.626c-2.803,1.161-4.63,3.896-4.63,6.929v144.29
			c0,4.142,3.358,7.5,7.5,7.5h144.291c3.034,0,5.768-1.827,6.929-4.63C248.058,344.244,247.416,341.019,245.271,338.874z
			 M120.241,336.677h-17.064V217.994l17.064,17.064V336.677z M135.242,336.677v-86.619l86.62,86.619H135.242z"
                fill="#21b6b7"
              />
            </svg>

            <div className={styles.header_first_label}>BONG</div>
            <div className={styles.header_second_label}>HIEN</div>
          </div>
        </Link>

        <button className={styles.theme_switcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>From TaiTD With Love</footer>
    </div>
  );
};

export default Layout;
