import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>testing-proj</title>
        <meta property="og:title" content="testing-proj" />
      </Helmet>
      <div className={styles.container1}>
        <h1 className={projectStyles.thqHeading1}>Heading</h1>
        <Link to="/about" className={projectStyles.thqLink}>
          Text
        </Link>
      </div>
    </div>
  )
}

export default Home
