import React from "react"
import { ToggleDarkMode } from './ToggleDarkMode'
import "../styles/index.css";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <body className="min-h-screen dark:bg-gray-700 dark:text-gray-200">
        <script src="./noflash.js" />
        <ToggleDarkMode />
        {children}
      </body>
    </>
  )
}

export default Layout
