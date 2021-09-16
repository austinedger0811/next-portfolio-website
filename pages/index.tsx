import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar current="About" />
      <h1>Hello Next</h1>
    </div>
  )
}

export default Home
