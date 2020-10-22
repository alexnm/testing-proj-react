import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About - testing-proj</title>
        <meta property="og:title" content="About - testing-proj" />
      </Helmet>
      <h1 className={projectStyles.thqHeading1}>About what?</h1>
    </div>
  )
}

export default About
