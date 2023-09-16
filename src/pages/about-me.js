import React from "react"
import * as styles from "./about-me.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
export default function about_me() {
  return (
    <Layout>
      
      <div className={styles.about}>
        <div className={styles.about__profile_pic}>
          <StaticImage src="../images/sangesherpa.jpg" alt="A dinosaur" />
        </div>
        <div className={styles.about__profile_desc}>
          <h2>My Intro and Journey</h2>
          <p>
            I am Sange Sherpa. I am a multifaceted professional who has
            journeyed through diverse career paths, which help me to develop a
            unique set of skills and experiences. For more than decade, I was
            immersed in multiple roles in field of tourism. I roamed the Nepal’s
            most breathtaking landscapes as dedicated trekking guide. Guiding
            adventurers through challenging terrains and sharing my passion for
            nature, I was able to connect to the people from various faceted of
            life. I got involved in management sector of tourism.
          </p>
          <p>
            After that I transition into the realm of technology. My deep
            interest in tech took me in tech field. I spend next four year in
            architectural visualization (arch viz). During this time, I
            transformed architectural concepts into 3d models. I worked for
            Japanese firm (SR Design) that specialized in arch viz. I learned to
            be detail oriented and be meticulous to create intricate 3d models.
            As a team leader, I learn leadership and expertise were integral in
            ensuring the successful execution of complex visualizations and
            designs.
          </p>
          <p>
            I was interested in world of web. I learned front-end development. I
            learned the art of crafting user-friendly and visually appealing
            websites, combining my design sensibilities with my newfound
            proficiency in HTML, CSS, and other key programming languages. My
            journey, spanning from trekking guide to 3D modeling team leader and
            front-end developer, has granted me a holistic perspective. I
            understand the importance of both visual aesthetics and seamless
            user experiences, whether it's guiding people through nature's
            wonders or crafting intuitive digital interfaces.
          </p>
          <p>
            On this website, you'll discover the culmination of my passions and
            expertise, reflecting my diverse journey. Whether you're seeking
            awe-inspiring trekking experiences, 3D modeling services, or
            innovative web development solutions, I'm here to bring your ideas
            to life with a blend of creativity, technical proficiency, and a
            deep appreciation for the world around us. Explore, connect, and
            let's embark on new adventures together!
          </p>
        </div>
      </div>
      
    </Layout>
  )
}
