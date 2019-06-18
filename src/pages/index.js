import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component, StyleSheet } from "react"
import { navigate } from "@reach/router"
import "../components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sticky: false,
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
    this.selector = React.createRef()
    // this.overRef = null
  }

  handleClick = () => {
    alert(this.selector.current.clientHeight)
  }

  godView = () => {
    navigate("/page-3")
  }
  goTo = id => {
    navigate("/page-2", { state: { id: id } })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            backgroundColor: "yellow",
            zIndex: -1,
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={require("../images/strip.png")}
            style={{ width: "100vw", height: "14vh " }}
            ref={this.selector}
            onClick={this.handleClick}
          />
          <img
            src={require("../images/strip.png")}
            style={{ width: "100vw", margin: 0, height: "14vh " }}
            /* onClick={this.handleClick} */
          />
        </div>

        <div
          style={{
            width: "100vw",
            marginTop: "14vh",
            height: "72vh",
            backgroundColor: "#1a1a1a",
            overflowX: "scroll",
            whiteSpace: "nowrap",
            overflowY: "hidden",
          }}
        >
          <div style={{ width: "800vw", height: "100%" }}>
            <div
              style={{
                width: "25vw",
                height: "100%",
                backgroundColor: "green",
                float: "left",
                backgroundImage:
                  "url(" + "https://i.ibb.co/tJ9Kqh2/text.jpg" + ")",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div style={styles.frame1}>
              <img
                src={require("../images/title.png")}
                style={{ width: "60%", margin: "5vh 0 0 5vw" }}
              />
              <p style={styles.text1}>MARTA KIELPINSKA</p>
              <p style={styles.text2}>CREATIVE PORTFOLIO</p>
              <div style={styles.stripe} onClick={() => this.godView()}>
                <p style={styles.text3} onClick={() => this.godView()}>
                  {" "}
                  &#171; GOD'S VIEW
                </p>
                {/* <p style={{width: "max-content"}}>ASSESSORS VIEW </p> */}
              </div>
            </div>
            <div style={styles.panel2} onClick={() => this.goTo(1)}>
              <img
                src={require("../images/shittyRobot.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel3} onClick={() => this.goTo(2)}>
              <img
                src={require("../images/vuejs.png")}
                style={{ width: "22vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel4} onClick={() => this.goTo(3)}>
              <img
                src={require("../images/DIY.png")}
                style={{ width: "22vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel10} onClick={() => this.goTo(9)}>
              <img
                src={require("../images/BF.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel5} onClick={() => this.goTo(4)}>
              <img
                src={require("../images/react.png")}
                style={{ width: "25vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel6} onClick={() => this.goTo(5)}>
              <img
                src={require("../images/GATSBY.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel7} onClick={() => this.goTo(6)}>
              <img
                src={require("../images/OC.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel8} onClick={() => this.goTo(7)}>
              <img
                src={require("../images/track.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>

            <div style={styles.panel9} onClick={() => this.goTo(8)}>
              <img
                src={require("../images/3d.png")}
                style={{ width: "20vw", margin: "45vh 0 0 1.5vw" }}
              />
            </div>
          </div>
        </div>
        {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage

const styles = {
  text1: {
    fontFamily: "Lato, sans-serif",
    letterSpacing: "1.8px",
    marginLeft: "5vw",
    marginTop: "2vh",
    marginBottom: 0,
    color: "white",
    fontWeight: "300",
  },
  text2: {
    fontFamily: "Lato, sans-serif",
    letterSpacing: "1.8px",
    marginLeft: "5vw",
    marginTop: "1vh",
    marginBottom: 0,
    color: "white",
    fontWeight: "300",
  },
  text3: {
    fontFamily: "Lato, sans-serif",
    letterSpacing: "1.8px",
    color: "white",
    fontWeight: "300",
    cursor: "pointer",
  },
  stripe: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    height: "10vh",
    backgroundColor: "transparent",
    flexDirection: "red",
    justifyContent: "space-between",
    display: "flex",
    padding: "0 20px",
    alignItems: "flex-end",
    zIndex: 9999,
  },
  frame1: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    position: "relative",
    backgroundImage: "url(" + "https://i.ibb.co/jbcTnzt/000015-Copy.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  panel2: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/8Kj3kqY/000031.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel3: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/cyzrQ7b/vue.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel4: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/3S14nty/diydarkroom.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel5: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/D138ckn/wolf.png" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel6: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/VQvqKhF/gatsby.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel7: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/sqqynCZ/org.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel8: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/DYPVXHP/mind.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel9: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/xhqt65D/heart.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel10: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/djFz0NZ/breaking.png" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
}
