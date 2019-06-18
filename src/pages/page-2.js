import React, { Component } from "react"
// import { Link } from "gatsby"
// import { navigate } from "@reach/router"

import Layout from "../components/layout"
import { contentPages } from "../components/content"
import "../components/extra.css"
class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
    // this.regexMobileCheck = this.regexMobileCheck.bind(this)
    // this.dec1 = React.createRef();
  }

  // regexMobileCheck () {
  //   if (typeof window !== `undefined`) {
  //   if( navigator.userAegent.match(/Android/i)
  //   || navigator.userAgent.match(/webOS/i)
  //   || navigator.userAgent.match(/iPhone/i)
  //   || navigator.userAgent.match(/iPad/i)
  //   || navigator.userAgent.match(/iPod/i)
  //   || navigator.userAgent.match(/BlackBerry/i)
  //   || navigator.userAgent.match(/Windows Phone/i)
  //   ){
  //      return true;
  //    }
  //   else {
  //      return false;
  //    }
  //   }
  //   return false
  // }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
    // const rect = this.selector.current.getBoundingClientRect();

    this.setState({
      id: this.props.location.state.id,
    })
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.state.sticky !== nextState.sticky) {
    //   return true
    // }
    if (this.props.location.state !== nextProps.location.state) {
      return true
    }
    if (this.state !== nextState) {
      return true
    }
    return false
  }

  // handleClick(no) {

  //   this.setState({
  //     gallery: no+'M.jpg'
  //   })
  //   // navigate('/')
  // }

  render() {
    let content = null

    content = (
      <div style={styles.firstPanelL}>
        <img
          src={require("../images/stripV.png")}
          style={{
            display: "flex",
            width: "5vw",
            height: "100vh",
          }}
        />
        <div style={styles.insidePanel} />
        <img
          src={require("../images/stripV.png")}
          style={{
            display: "flex",
            width: "5vw",
            height: "100vh",
          }}
        />
      </div>
    )

    if (contentPages && this.state.id > 0) {
      let post = contentPages.find(el => el.id === this.state.id)
      if (post) {
        const title = post.title
        const myb = post.body

        content = (
          <div style={styles.firstPanelL}>
            <img
              src={require("../images/stripV.png")}
              style={{
                display: "flex",
                width: "5vw",
                height: "100vh",
              }}
            />
            <div style={styles.insidePanel}>
              {" "}
              <div style={styles.body}>
                <p style={styles.title}>{title}</p>
                {myb}
              </div>
            </div>
            <img
              src={require("../images/stripV.png")}
              style={{
                display: "flex",
                width: "5vw",
                height: "100vh",
              }}
            />
          </div>
        )
      }
    }

    return <Layout>{content}</Layout>
  }
}

const styles = {
  body: {
    overflowY: "auto",
    height: "100vh",
  },
  firstPanelL: {
    height: "100vh",
    width: "100vw",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
  },
  insidePanel: {
    height: "100vh",
    width: "90vw",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: "3vw",
  },
  title: {
    fontFamily: "Oswald, sans-serif",
    fontSize: "3.5em",
    paddingTop: "2vh",
    margin: "2vh 0",
    paddingBottom: "2vh",
  },
  bodyText: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 300,
    fontSize: "1.45em",
  },
  galleryGrid: {
    width: "50vh",
    height: "50vh",
    display: "block",
    margin: "4vh auto",
    backgroundColor: "white",
    cursor: "pointer",
  },
}

export default SecondPage
