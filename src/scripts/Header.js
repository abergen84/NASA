import React from 'react'


export const Header = React.createClass({
	render(){
		return (
			<nav>
				<h1>nasa</h1>
			</nav>
			)
	}
})

export const Options = React.createClass({
	
	_submit(event){
		event.preventDefault()
		const infoObj = {
			sol: event.target.sol.value
			, rover: event.target.rover.value
			, camera: event.target.camera.value
		}
		console.log(infoObj)
		location.hash = `#nasa/${infoObj.rover}/${infoObj.camera}/${infoObj.sol}`
	}

	, render(){
		return (
			<div>
				<form onSubmit={this._submit}>
					<input name="sol" type="date" required />
					<select name="rover">
						<option value="curiosity">Curiosity</option>
						<option value="spirit">Spirit</option>
						<option value="opportunity">Opportunity</option>
					</select>
					<select name="camera">
						<option value="fhaz">Front Hazard Avoidance Camera</option>
						<option value="rhaz">Rear Hazard Avoidance Camera</option>
						<option value="navcam">Navigation Camera</option>
						<option value="pancam">Panoramic Camera</option>
					</select>
					<button type="submit">Submit</button>
				</form>
			</div>
			)
	}
})
