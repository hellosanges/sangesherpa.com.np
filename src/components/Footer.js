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
        <p>Stay Connected</p>

        <ul>
          <li key="1">
            <a href="google.com">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li key="2">
            <a href="google.com">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
          </li>
          <li key="3">
            <a href="google.com">
              <FontAwesomeIcon icon={faMailBulk} />
            </a>
          </li>
          <li key="4">
            <a href="google.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
