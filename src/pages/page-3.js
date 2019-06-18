import React, { Component } from "react"
// import { Link } from "gatsby"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import { contentPages } from "../components/content"
import "../components/extra.css"
class ThirdPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      letter: "",
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
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.state.sticky !== nextState.sticky) {
    //   return true
    // }

    if (this.state !== nextState) {
      return true
    }
    return false
  }

  handleClick(no) {
    if (no == 0) {
      navigate("/")
      return
    }

    this.setState({
      letter: no,
    })

    // this.setState({
    //   gallery: no+'M.jpg'
    // })
  }

  render() {
    const letterStyle = {
      ...styles.pickers,
      color: "white",
      fontSize: "1.5em",
    }
    const activeLetterStyle = {
      ...styles.pickers,
      color: "lightgreen",
      fontSize: "1.5em",
      width: "100%",
      textAlign: "center",
    }
    let content = null
    const back = (
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "max-content",
          padding: "20px 20px",
        }}
      >
        <p style={styles.back} onClick={() => this.handleClick(0)}>
          BACK TO HOMEPAGE
        </p>
      </div>
    )
    content = <div style={styles.firstPanelL}>{back}</div>

    let letters1 = ["A", "B", "C", "D", "E", "F", "G"]
    let letters2 = ["H", "I", "J", "K", "L", "M", "N", "O"]
    let list = null

    if (contentPages) {
      let mycontent = contentPages

      if (this.state.letter.length !== 0) {
        mycontent = contentPages.filter(
          el => el.letters.findIndex(e => e == this.state.letter) !== -1
        )
      }

      list = mycontent.map(el => {
        return (
          <div style={styles.postRow} key={el.title}>
            <div style={styles.letterHolder}>
              {el.letters.map(e => {
                return (
                  <p key={e} style={styles.letters}>
                    {e}
                  </p>
                )
              })}
            </div>

            <p style={styles.title}>{el.title}</p>
          </div>
        )
      })
      content = (
        <div style={styles.firstPanelL}>
          {back}
          {list}
          <div style={styles.fixed}>
            <p style={styles.ask}>What are you looking for?</p>
            <div style={styles.holder}>
              <div style={styles.half}>
                {letters1.map(l => {
                  return (
                    <p
                      key={l}
                      style={
                        this.state.letter == l ? activeLetterStyle : letterStyle
                      }
                      onClick={() => this.handleClick(l)}
                    >
                      {l}
                    </p>
                  )
                })}
              </div>
              <div style={styles.half}>
                {letters2.map(l => {
                  return (
                    <p
                      key={l}
                      onClick={() => this.handleClick(l)}
                      style={
                        this.state.letter == l ? activeLetterStyle : letterStyle
                      }
                    >
                      {l}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <Layout>{content}</Layout>
  }
}

const styles = {
  body: {
    overflowY: "auto",
    height: "100vh",
  },
  letterHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  holder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  half: {
    flexDirection: "column",
    display: "flex",
    width: "49.5%",
  },
  postRow: {
    padding: "10px 10px",
    backgroundColor: "white",
    border: "1px solid lightgrey",
  },
  letters: {
    fontFamily: "Oswald, sans-serif",
    fontSize: "2em",
    display: "flex",
    paddingLeft: "20px",
  },
  title: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 300,
    fontSize: "1.45em",
    paddingLeft: "20px",
    margin: 0,
  },
  firstPanelL: {
    backgroundColor: "#f3f3f3",
    overflowY: "auto",
    height: "100vh",
    width: "80vw",
  },
  galleryGrid: {
    width: "50vh",
    height: "50vh",
    display: "block",
    margin: "4vh auto",
    backgroundColor: "white",
    cursor: "pointer",
  },
  fixed: {
    position: "fixed",
    height: "100vh",
    width: "20vw",
    top: 0,
    right: 0,
    left: "auto",
    backgroundColor: "black",
  },
  ask: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 300,
    fontSize: "1.15em",
    color: "white",
    padding: "2vh 0 ",
    margin: 0,
    width: "100%",
    textAlign: "center",
  },
  pickers: {
    fontFamily: "OpenSans, sans-serif",
    fontWeight: "700",
    padding: "20px 0 0 0 ",
    margin: "0",
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
  },
  back: {
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "Raleway, sans-serif",
    fontWeight: 300,
    fontSize: "1.35em",
    color: "white",
    margin: 0,
    padding: 0,
  },
}

export default ThirdPage
