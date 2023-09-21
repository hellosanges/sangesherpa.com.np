import React from "react"
import * as styles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import {
  faSquareGithub,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>All right reserved © Sange Sherpa</div>
      <div className={styles.footer__social}>
        <p className={`hide-for-mobile`}>Stay Connected</p>

        <ul>
          <li key="1">
            <a href="https://github.com/hellosanges/">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li key="2">
            <a href="https://www.facebook.com/sangesherpa24/">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
          </li>
          <li key="3">
            <a href="mailto:hellosanges@gmail.com">
              <FontAwesomeIcon icon={faMailBulk} />
            </a>
          </li>
          <li key="4">
            <a href="https://www.linkedin.com/in/sange-sherpa/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
