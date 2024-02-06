import React, { useContext } from "react";
import { GlobalContext } from "../../share/context";
import styles from './Header.module.css';

export default function Header() {
  const { toggleAuth, isAuthentication } = useContext(GlobalContext);

  console.log("Click", toggleAuth);
  console.log(toggleAuth, isAuthentication);
  return (
    <header className={styles.header}>
      <button onClick={toggleAuth} className={styles.btn}>
        {isAuthentication ? "Logout" : "Login"}
      </button>
    </header>
  );
}
