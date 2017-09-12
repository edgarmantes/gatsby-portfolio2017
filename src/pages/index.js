import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

let cont = css({
	marginTop: '60vh'
})

let first = css({
	fontSize: '55px',
	marginBottom: 0,
	lineHeight: 0.9,
})

let last = css({
	fontSize: '55px',
	marginBottom: 0,
	lineHeight: 0.9
})


const IndexPage = () => (
  <div {...cont}>
    <h1 {...first}>EDGAR</h1>
    <h1 {...last}>MANTES</h1>
    <p>WEB DEVELOPER</p>
  </div>
)

export default IndexPage
