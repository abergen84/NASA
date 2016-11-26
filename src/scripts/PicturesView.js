import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {Header,Options} from './Header.js'

const PicturesView = React.createClass({

	render() {
		return (
			<div>
				<Header />
				<Options />
				<Pictures introColl={this.props.introColl}/>
			</div>
			)
	}
})

const Pictures = React.createClass({

	render() {
		console.log(this.props.introColl)
		return (
			<div>
				{this.props.introColl.models.map(function(picture){
					return <Picture picture={picture} key={picture.cid} />
				})}
			</div>
			)
	}
})

const Picture = React.createClass({
	render(){
		console.log(this.props.picture)
		return (
			<div>
				<img src={this.props.picture.attributes.img_src} />
			</div>
			)
	}
})









export default PicturesView