import { useState } from "react"
import "./App.scss"
import Navbar from "./Components/navbar/Navbar"
import Test from "./Components/navbar/Test"
import Sidebar from "./Components/navbar/sidebar/Sidebar"
import Hero from "./Components/navbar/hero/Hero"
import Parallax from "./Components/navbar/parallax/Parallax"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section id='homepage'>
          <Navbar />
          <Hero />
        </section>

        <section id='services' type='portfolio'>
          parallax
        </section>
        <section id='portfolio'>
          <Parallax type='portfolio' />
        </section>
        <section>Parallax</section>
        <section>Portfolio 1</section>
        <section>Portfolio 2</section>
        <section>Portfolio 3</section>
        <section>Contact</section>
        {/* <Test /> */}
      </div>
    </>
  )
}

export default App
