import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const NavItem = ({ name, icon: Icon, activePage, color, backgroundColor }) => {
  return (
    <li>
      <Link
        style={{
          '--color': color,
          '--backgroundColor': backgroundColor
        }}
        className={`${styles.navItem} ${
          activePage === name ? styles.navItemActive : ''
        }`}
        to={`/${name}`}
        data-tap
      >
        <Icon />
      </Link>
    </li>
  )
}

export default function Nav({ setPage, activePage, config }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {config.map((data) => {
          return (
            <NavItem
              setPage={setPage}
              activePage={activePage}
              {...data}
              key={data.name}
            />
          )
        })}
      </ul>
    </nav>
  )
}
