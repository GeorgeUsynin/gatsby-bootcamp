import React from "react"
import Header from "../header/header"
import Footer from "../footer"
import "../../styles/index.scss"
import * as cls from "./layout.module.scss"


const Layout = (props) => {
  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
