import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import ScrollableCards from './ScrollableCards'

const fib = (n) => {
  if (n === 0 || n === 1) return n
  return fib(n - 2) + fib(n - 1)
}

// mock a slow-mounting page
const fibCount = 36

export default function Page({ color, profilePic, otherPages, name }) {
  fib(fibCount)
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.head
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', color)
  }, [color])

  return (
    <div>
      <div
        className={styles.header}
        style={{
          '--color': color
        }}
      >
        <img src={profilePic} alt='' className={styles.profile} />
        <h1>{name}</h1>
      </div>
      <div className={styles.page}>
        <p>
          This app has various clickable items to help you test tap highlight
          styles on mobile.
        </p>
        <p>
          All page transitions will block for some amount of time due to the
          fact that they spend some time calculating{' '}
          <a
            href='https://en.wikipedia.org/wiki/Fibonacci_number'
            className={styles.testLinkOne}
            data-tap
          >
            the fibonacci sequence
          </a>
          .
        </p>
        <h2>Scrollable Fish</h2>
        <ScrollableCards />
        <h2>List of animals</h2>

        {otherPages.concat(otherPages).map((data) => {
          return (
            <ul>
              <li>
                <Link
                  to={`/${data.name}`}
                  className={styles.testLinkTwo}
                  data-tap
                >
                  Can I interest you in a {data.name}?
                </Link>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
