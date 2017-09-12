import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Project from './project'
import scrum from '../images/scrum3.png'
import time from '../images/time4.png'
import log from '../images/LogRoom3.png'
import brew from '../images/brew3.png'
import horn from '../images/unique2.jpg'

let cont = css({
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	backgroundColor: 'lightgray',
	zIndex: -1
})

let center = css({
	textAlign: 'center',
	marginTop: '95px'
})

const MyWorkPage = () => (
  <div {...cont}>
    <h1 {...center}>My Work</h1>
    <Project 
    	name='Scrummage'
    	image={scrum}
    	description='Get organized and be more productive using the Scrum-mage app. Get to work on this Scrum framework.'
    	role='Designer, Coder'
    	tech='React, Redux, Node, Passport, MongoDB, Mongoose' />

    <Project 
    	name='Time Tracker'
    	image={time}
    	description='Track the time to complete your project. No more guessing, track your time using this app.'
    	role='Designer, Coder'
    	tech='React, Redux, Node, Passport, MongoDB, Mongoose' />

    <Project 
    	name='Log Room'
    	image={log}
    	description='Get your team organized and keep the communcation clear within the team. LogRoom will help you do exactly that.'
    	role='Designer, Coder'
    	tech='jQuery, Mocha, Chai, MongoDB, Mongoose' />

    <Project 
    	name='Map My Brewery'
    	image={brew}
    	description="Check out the breweries around you and your friends. Don't miss out on one sip."
    	role='Designer, Coder'
    	tech='ES6, Webpack, LESS, Babel' />

    <Project 
    	name='Unique Horn'
    	image={horn}
    	description="This mobile app gets you the trending Unicorn gifs along with a quote from Chuck Norris on each one"
    	role='Designer, Coder'
    	tech='Ionic 2 framework' />
  </div>
)

export default MyWorkPage
