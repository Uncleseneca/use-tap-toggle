import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Page from './Page'
import styles from './App.module.scss'
// import useTapToggle from "./useTapToggle";
import config from './config'

function App() {
  // useTapToggle();
  return (
    <Router>
      <div className={styles.app}>
        <Route
          path='/:page?'
          render={(routeProps) => {
            const page = routeProps.match.params.page || 'dog'
            const data = config.find((c) => c.name === page) || config[0]
            const profilePic = data.profilePic
            return (
              <>
                <Page
                  profilePic={profilePic}
                  color={data.color}
                  key={page}
                  name={page}
                  otherPages={config.filter((c) => c.name !== page)}
                />
                <Nav activePage={page} config={config} />
              </>
            )
          }}
        />
      </div>
    </Router>
  )
}

export default App
