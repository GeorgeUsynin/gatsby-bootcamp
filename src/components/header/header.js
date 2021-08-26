import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as cls from "./header.module.scss"

const Header = () => {

  let data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
            }
           }
          }
  `)

  return (
    <header className={cls.header}>
      <h1>
        <Link className={cls.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={cls.navList}>
          <li><Link to="/" className={cls.navItem} activeClassName={cls.activeNavItem}>Home</Link></li>
          <li><Link to="/about" className={cls.navItem} activeClassName={cls.activeNavItem}>About me</Link></li>
          <li><Link to="/blog" className={cls.navItem} activeClassName={cls.activeNavItem}>Blog</Link></li>
          <li><Link to="/contact" className={cls.navItem} activeClassName={cls.activeNavItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
