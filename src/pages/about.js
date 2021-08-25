import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {

  return (
    <Layout>
      <h1>About me</h1>
      <p>I graduated from the Belorussian State University of Informatics and Radioelectronics. I had repaired printers
        fo 10 years. Now I'm looking for a job.</p>
      <p>To contact with me, please refer the link below: <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage
