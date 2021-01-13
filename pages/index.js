import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import FormLogin from "../components/Layout/FormLogin";
import { useState } from "react";

export default function Home() {
  return (
    <Layout>
      <div className={styles.form_wrapper}>
        <FormLogin />
      </div>
    </Layout>
  );
}
