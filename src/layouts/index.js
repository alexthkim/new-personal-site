import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import css from '../styles/site.css'
import bulma from '../../node_modules/bulma/css/bulma.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    return (
      <div>
        <Helmet
          title="Alex Kim's Personal Website"
        />
        <div style={{
            margin: `0 auto`,
            paddingTop: 0,
            fontFamily: 'Avenir Next',
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
