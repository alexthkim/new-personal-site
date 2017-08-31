import React from "react"

export default class HeroPage extends React.Component {

  componentDidMount() {
    var Scroll = require('react-scroll');
    const scroller = Scroll.scroller;

    this.clickToScroll = function (eleName) {
      scroller.scrollTo(eleName, {
        duration: 1500,
        delay: 100,
        smooth: true
      })
    }
  }

  render() {
    return (
      <section className="container1 hero is-fullheight">
        <div id='landing-header' className="hero-head">
          <nav className="nav">
            <div className="unlimited-width container" >

              <span id="nav-toggle" className="nav-toggle"  onClick={() => document.getElementById('nav-menu').classList.toggle('is-active')} style={{backgroundColor:"white"}}>
                <span style={{backgroundColor:'black'}}></span>
                <span style={{backgroundColor:'black'}}></span>
                <span style={{backgroundColor:'black'}}></span>
              </span>
              <div id="nav-menu" style={{backgroundColor:'white'}} className="nav-right nav-menu">
                <span id="nav1" className="nav-item">
                  <a href="#about" onClick={(event) => {event.preventDefault(); clickToScroll('about')}} style={{color:"black"}}>
                    about
                  </a>
                </span>
                <span id="nav2" className="nav-item">
                  <a href="#team" onClick={(event) => {event.preventDefault(); clickToScroll('team')}} style={{color:"black"}}>
                    projects
                  </a>
                </span>
                <span  id="nav3" className="nav-item">
                  <a href="#careers" onClick={(event) => {event.preventDefault(); clickToScroll('careers')}} style={{color:"black"}}>
                    readings
                  </a>
                </span>
                <span  id="nav4" className="nav-item">
                  <a href="#careers" onClick={(event) => {event.preventDefault(); clickToScroll('careers')}} style={{color:"black"}}>
                    contact
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title" style={{fontSize: "4em"}}>
              Hi, I'm Alex!
            </h1>
            <h2 className="subtitle">
              Bay Area Developer
            </h2>
          </div>
        </div>

      </section>
    )
  }
}
