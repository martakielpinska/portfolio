import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div style={{ position : "absolute", height: "100vh", width: "100%", backgroundColor: "yellow", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
  <img
      src={require('../images/strip.png')}
      style={{ width : "100vw"}}
      /* onClick={this.handleClick} */
    ></img>
    <img
      src={require('../images/strip.png')}
      style={{ width : "100vw" , margin: 0}}
      /* onClick={this.handleClick} */
    ></img>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
