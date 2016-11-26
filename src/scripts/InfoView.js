import React from 'react'
import Backbone from 'backbone'
import {Header,Options} from './Header.js'


const InfoView = React.createClass({
	
	render(){
		console.log(this.props.introMod)
		return (
			<div>
				<Header />
				<Options />
				<Info introMod={this.props.introMod} />
			</div>
			)
	}
})

const Info = React.createClass({
	render(){
		return (
			<div>
				<h3>Rover Name: {this.props.introMod.changed.photo_manifest.name}</h3>
				<p>Landing Date on Martian surface (Year/Month/Day):  
					{this.props.introMod.changed.photo_manifest.landing_date}</p>
				<p>Number of Martian Days on surface: 
					{this.props.introMod.changed.photo_manifest.max_sol}</p>
			</div>
			)
	}
})

// const Pictures = React.createClass({
// 	render(){
// 		return (
// 			<h2>Test</h2>
// 			)
// 	}
// })


export default InfoView