import React from "react"
import * as styles from "./Header.module.scss"
import Menu from "./Menu"

export default function Header() {
  return (
    <>
      <div className={styles.filler}></div>
      <div className={`${styles.header} flex flex-ai-c flex-jc-sb`}>
        <div className={styles.header__logo}>
          <h2>Sange Sherpa</h2>
          <h3>3d / Front End Development</h3>
        </div>

        <Menu />
      </div>
    </>
  )
}
