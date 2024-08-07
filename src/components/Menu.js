import React,{useState} from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as styles from "./Menu.module.scss"
import { useLocation } from "@reach/router"

export default function Menu() {
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
      <div className={styles.mainMenu}>
        <div className={`${styles.mainMenu__menu} hide-for-mobile `}>{menu}</div>
        <div
          className={`${styles.mainMenu__hamburger} ${
            isMenuOpen ? "open " : ""
          } hide-for-desktop `}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={` ${
            isMenuOpen ? "open fade-in" : "fade-out"
          } hide-for-desktop `}
        >
          <div className={styles.menu_expand}>{menu}</div>
        </div>
      </div>
    )
}
