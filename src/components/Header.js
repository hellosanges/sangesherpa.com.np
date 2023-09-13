import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as styles from "./Header.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { useLocation } from "@reach/router"

export default function Header({ pageTitle }) {
  const data = useStaticQuery(graphql`
    {
      allWpMenuItem {
        edges {
          node {
            id
            label
            uri
          }
        }
      }
    }
  `)

  //iconStyle
  const iconStyle = {
    fontSize: "24px", // Adjust the size in pixels as needed
  }

  const { allWpMenuItem } = data
  const location = useLocation()

  //hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menu = (
    <ul>
      {allWpMenuItem.edges.map(({ node }) => (
        <li
          key={node.id}
          className={location.pathname === node.uri ? "active" : ""}
        >
          <Link to={node.uri}>{node.label}</Link>
        </li>
      ))}
    </ul>
  )
  return (
    <>
      <div className={`${styles.header} flex flex-ai-c flex-jc-sb`}>
        <div className={styles.header__logo}>
          <h2>Sange Sherpa</h2>
          <h3>3d / Front End Development</h3>
        </div>

        <div className={`${styles.header__menu} hide-for-mobile `}>{menu}</div>
        <div
          className={`${styles.header__hamburger} ${
            isMenuOpen ? "open " : ""
          } hide-for-desktop `}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className={` ${
          isMenuOpen ? "open fade-in" : "fade-out"
        } hide-for-desktop `}
      >
        <div className={styles.menu_expand}>{menu}</div>
      </div>
    </>
  )
}
