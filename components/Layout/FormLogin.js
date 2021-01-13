import React, { useState } from "react";

import PersonRounded from "@material-ui/icons/PersonRounded";
import LockRounded from "@material-ui/icons/LockRounded";

import styles from "./FormLogin.module.css";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div class={styles.form_container}>
      <div class={styles.form_main}>
        <div className={styles.signin_label}>Đăng nhập</div>
        <div className={styles.username_label}>Tên đăng nhập</div>
        <div className={styles.form_input}>
          <PersonRounded color="inherit" />
          <input className={styles.input} placeholder="Nhập tên đăng nhập" />
        </div>
        <div className={styles.password_label}>Mật khẩu</div>
        <div className={styles.form_input}>
          <LockRounded color="inherit" />
          <input
            className={styles.input}
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className={styles.form_checkbox_container}>
          <div className={styles.form_checkbox}>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <div className={styles.remember_label}>Nhớ mật khẩu</div>
          </div>

          <div className={styles.forgot_password_label}>
            <a href="#">Quên mật khẩu?</a>
          </div>
        </div>
        <button type="submit" className={styles.form_button_submit}>
          Đăng nhập
        </button>
      </div>

      <div class={styles.form_footer}>
        <div class={styles.dont_have_account_label}>Chưa có tài khoản?</div>
        <div class={styles.sign_up_label}>Đăng ký</div>
      </div>
    </div>
  );
};

export default FormLogin;
