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
    navigate("/page-3/")
  }
  goTo = id => {
    navigate("/page-2/", { state: { id: id } })
  }

  render() {
    return (
      <Layout>
        <SEO title="Analog Space" />
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
          <div style={{ width: "520vw", height: "100%" }}>
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
                position: "relative",
              }}
            >
              <div style={styles.stripe} onClick={() => this.godView()}>
                <p style={styles.godText} onClick={() => this.godView()}>
                  &#171; ASSESSOR'S <br />
                  VIEW
                </p>
              </div>
            </div>
            <div style={styles.frame1}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                  backgroundColor: "black",
                  width: "max-content",
                }}
              >
                ROAD TO GRADUATION <br /> AT ANALOG SPACE
              </h2>
              <p style={styles.text1}>MARTA KIELPINSKA</p>
              <p style={styles.text2}>CREATIVE PORTFOLIO</p>
            </div>
            <div style={styles.panel2} onClick={() => this.goTo(1)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                CUSTOM USER INTERFACES
              </h2>
            </div>

            <div style={styles.panel3} onClick={() => this.goTo(2)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                LIGHT RESEARCH
              </h2>
            </div>

            <div style={styles.panel4} onClick={() => this.goTo(3)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                SVGS IN HYBRID APPS
              </h2>
            </div>

            <div style={styles.panel10} onClick={() => this.goTo(9)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                TOUCHLESS USER EXPERIENCE
              </h2>
            </div>

            <div style={styles.panel5} onClick={() => this.goTo(4)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                ENGINEERING CHEMISTRY
              </h2>
            </div>

            <div style={styles.panelMC} onClick={() => this.goTo(10)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                MANAGE & CONTROL
              </h2>
            </div>

            {/* <div style={styles.panel6} onClick={() => this.goTo(5)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                SUPPORTING ANDROID
              </h2>
            </div>

            <div style={styles.panel7} onClick={() => this.goTo(6)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                SUPPORTING IOS
              </h2>
            </div>

            <div style={styles.panel8} onClick={() => this.goTo(7)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                SOCIAL MEDIA
              </h2>
            </div>

            <div style={styles.panel9} onClick={() => this.goTo(8)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                IMAGE PROCESSING IN HYBRID APPS
              </h2>
            </div>

            <div style={styles.panel11} onClick={() => this.goTo(10)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                CREATIVE PROBLEM SOLVING
              </h2>
            </div>

            <div style={styles.panel11} onClick={() => this.goTo(10)}>
              <h2
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  marginLeft: "5vw",
                  marginTop: "5vw",
                  color: "white",
                  fontSize: "3vh",
                }}
              >
                THE CHEMISTRY
              </h2>
            </div> */}
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
    backgroundColor: "black",
    width: "max-content",
  },
  text2: {
    fontFamily: "Lato, sans-serif",
    letterSpacing: "1.8px",
    marginLeft: "5vw",
    marginTop: "1vh",
    marginBottom: 0,
    color: "white",
    fontWeight: "300",
    backgroundColor: "black",
    width: "max-content",
  },
  godText: {
    fontFamily: "Lato, sans-serif",
    letterSpacing: "1.8px",
    color: "white",
    fontWeight: "300",
    cursor: "pointer",
    textAlign: "right",
  },
  stripe: {
    position: "absolute",
    bottom: 10,
    right: 30,
    width: "max-content",
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
    backgroundImage: "url(" + "https://i.ibb.co/qR6yVzz/main.jpg" + ")",
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
    backgroundImage: "url(" + "https://i.ibb.co/5K4p83h/int.jpg" + ")",
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
    backgroundImage: "url(" + "https://i.ibb.co/X2xYsHP/light.jpg" + ")",
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
    backgroundImage: "url(" + "https://i.ibb.co/6twsJH0/mycam.jpg" + ")",
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
    backgroundImage: "url(" + "https://i.ibb.co/sHyqkZH/dev.jpg" + ")",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panelMC: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/RpTB4rt/mana.jpg" + ")",
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
    backgroundImage: "url(" + "https://i.ibb.co/7gkTrz3/vin.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
  panel11: {
    width: "50vw",
    height: "100%",
    backgroundColor: "green",
    marginLeft: "5vw",
    float: "left",
    backgroundImage: "url(" + "https://i.ibb.co/WPrkw4p/exp.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "pointer",
  },
}
