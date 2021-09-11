import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar current="About" />
      <h1>Hello Next</h1>
    </>
  )
}

export default Home
