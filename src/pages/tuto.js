import * as React from "react"
import Layout from '../components/layout';

const TutoPage = ({ serverData }) => (
  <Layout pageTitle='The dog'>
    <img alt="Happy dog" src={serverData.message} />
  </Layout>
)

export default TutoPage

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}