import React from "react"
import "./Navbar.scss"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import Sidebar from "./sidebar/Sidebar"

function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Santosh K.
        </motion.span>
        <div className='social'>
          <a href=''>
            <FaLinkedin />
          </a>
          <a href=''>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
