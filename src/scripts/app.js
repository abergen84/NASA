import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import PicturesView from './PicturesView.js'
import InfoView from './InfoView.js'

const app = function() {

	// const Model = Backbone.Model.extend({
	// 	url: ()=>
	// 		'',

	// })
	const PhotosCollection = Backbone.Collection.extend({
		// model: Model
		url: function(){
			return `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.rover}
					/photos?earth_date=${this.sol}&camera=${this.camera}&api_key=DEMO_KEY`
		}
		, parse: (data) => {
			console.log(data)
			return data.photos
		}
		, initialize: function(rover,camera,sol){
			console.log(rover,camera,sol)
			this.rover = rover
			this.camera = camera
			this.sol = sol
		}
	})


	const InitialModel = Backbone.Model.extend({
		url: () =>
			'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=DEMO_KEY'
		// , parse: (data) => {
		// 	data
		// }
	})


	const Router = Backbone.Router.extend({
		routes: {
			'nasa': 'mainPage'
			, 'nasa/:rover/:camera/:sol': 'routePictures'
			, '*catchall': 'redirectHome'
		}

		, initialize: () =>
			Backbone.history.start()

		, redirectHome: () => 
			location.hash = 'nasa'

		, mainPage: () => {
			const introMod = new InitialModel()
			
			introMod.fetch()
				.then(()=> ReactDOM.render(<InfoView introMod={introMod} />, 
					document.querySelector('.container')))
		}

		, routePictures: (rover,camera,sol) => {
			console.log(rover,camera,sol)
			const introColl = new PhotosCollection(rover,camera,sol)

			introColl.fetch({
				success: () => console.log("success"),
				error: (collection, response, options) => console.log(response)
			})	
			.then(()=> ReactDOM.render(<PicturesView introColl={introColl} />,
					document.querySelector('.container')))
		}
	})

	new Router()

}

app()