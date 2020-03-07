import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { getLists } from "../hooks"

import Home from "./Home"

export default props => {
  return (
    <Router>
      <div classname="wrapper">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}
