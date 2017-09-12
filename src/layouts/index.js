import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './index.css';
import { css } from 'glamor';


let navi = css({
  background: 'white',
  marginBottom: '1.45rem',
  boxShadow: '0px 1px 3px 0px lightgrey',
  zIndex: 2
})

let hdr = css({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
})

let title = css({
  fontSize: '15px',
  margin: 0,
  display: 'inline-block'
})

let link = css({
  color: 'black',
  textDecoration: 'none',
})

let unordered = css({
  display: 'inline-block',
  float: 'right',
  margin: '0 5px'
})

let list = css({
  display: "inline-block",
  listStyle: 'none',
  margin: '0 10px',
  color: 'black'
})

const Header = () => (
  <div {...navi}>
    <div {...hdr}>
      <h1 {...title}>
        <Link to="/" {...link}>EM</Link>
      </h1>
      <ul {...unordered}>
        <Link to='/about/'><li {...list}>About</li></Link>
        <Link to='/mywork/'><li {...list}>My Work</li></Link>
        <Link to='/contact/'><li {...list}>Contact Me</li></Link>
      </ul>

    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
