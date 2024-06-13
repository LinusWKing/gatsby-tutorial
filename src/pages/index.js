import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        This is the new home page layout
      </p>
      <StaticImage
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt='Some' />

    </Layout>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage


