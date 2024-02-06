import React, { useContext } from "react";
import Header from "../Header/Header";
import { GlobalContext } from "../../share/context";
import styles from './Main.module.css';

export default function Main() {
  const { isAuthentication } = useContext(GlobalContext);
  return (
    <div>
      <Header />
      {isAuthentication ? <p className={styles.user}>Hello, user!</p> : <p className={styles.login}>Please, login!</p>}
    </div>
  );
}
