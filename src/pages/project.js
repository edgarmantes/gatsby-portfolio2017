import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import github from '../images/github2.png'
import web from '../images/web1.png'


let project = css({
	// textAlign: 'center',
    marginBottom: '25px',
    backgroundColor: 'white'
})

let spantag = css({
	color: 'blue',
	fontWeight: 'bold'
})

let ital = css({
	fontStyle: 'italic',
	margin: '5px'
})

let des = css({
	margin: '5px'
})

let buttons = css({
	width: '20%',
	height: '195px',
	display: 'inline-block'
})

let button = css({
	width: '100%',
	height: '50%',
	backgroundColor: 'transparent',
	border: 'none'
})

let about =css({
	width: '79%',
	display: 'inline-block'
})

let image = css({
	margin: 0
})

const Project = (props) => (
  <section {...project}>
  	<img src={props.image}/>
  	<div>
  		<div {...buttons}>
  			<Link to={props.githubURL}><button {...button}><img {...image} src={github}/></button></Link>
			<Link to={props.webURL}><button {...button}><img {...image} src={web}/></button></Link>
  		</div>
  		<div {...about}>
  			<h2>{props.name}</h2>
	  		<p {...des}>{props.description}</p>
	  		<p {...ital}><span {...spantag}>Role:</span> {props.role}</p>
	  		<p {...ital}><span {...spantag}>Tech:</span> {props.tech}</p>
 		</div>
 	</div>
  </section>
)

export default Project

