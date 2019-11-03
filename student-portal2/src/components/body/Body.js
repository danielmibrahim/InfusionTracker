import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import MaleBody from '/Users/Danny/Documents/Capstone/student-portal2/src/images/MaleBody.jpg';
import Modal from '../modal/Modal';
import axios from 'axios';
import Timer from 'react-compound-timer'


class Body extends Component {
	constructor() {
		super();


		this.state = {
			isShowing: false,
			preFillColor: "white",
			areas: [],
			selectedArea: undefined

		}

	}

	componentDidMount() {
		const email = localStorage.getItem("loggedInStudent");
		console.log("area ::> ", email)
		axios.get(`http://localhost:8080/sites/findSites/${email}`)
			.then(response => {
				console.log(response.data)
				let areasFromDb = response.data
					.map((record, index) => {
						return {
							name: index,
							shape: record.shape,
							coords: [record.xCoord, record.yCoord, 5],
							fillColor: record.fillColor,
							preFillColor: record.fillColor,
							date: record.dateStarted,
							savedArea: true
						}
					})
				this.setState({ areas: areasFromDb })
			}).catch(error => {
			})




	}

	openModalHandler = (area) => {
		console.log("selectedArea ", area)
		this.setState({
			isShowing: true,
			selectedArea: area
		});
	}


	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	}

	updateArea = (evt) => {
		let newArea = { name: "1", shape: "circle", coords: [evt.nativeEvent.layerX, evt.nativeEvent.layerY, 5], fillColor: "green", preFillColor: "green" }
		// const areas = this.state.areas
		this.setState(
			{
				areas: [...this.state.areas, newArea],
				isShowing: true,
				selectedArea: newArea
			}
		)

	}

	removeLastAddedArea = () => {
		let areas = this.state.areas
		areas.pop()

		this.setState(
			{
				areas: [...areas],
				isShowing: false,
				selectedArea: undefined
			}
		)
	}

	areasSubmitHandler = (event) => {
		// event.preventDefault();

		if (this.state.selectedArea.savedArea != true) {
			const email = localStorage.getItem("loggedInStudent");
			console.log("area ::> ", this.state.selectedArea)
			axios.post(`http://localhost:8080/sites/add-site/${email}`, {
				xCoord: this.state.selectedArea.coords[0],
				yCoord: this.state.selectedArea.coords[1],
				shape: this.state.selectedArea.shape,
				fillColor: this.state.selectedArea.fillColor,
				siteStudent: this.state.loggedInStudent
			})
				.then(response => {

				}).catch(error => {
				})
		}

		// axios.get('http://localhost:8080/findSites')
		// .then(response => {
		//     this.setState(
		//         {
		//             siteLocations: response.data
		//         }
		//     )
		// })



	}

	beginSiteTracker = () => {

		this.setState({
			preFillColor: "green"

		});


	}

	confirmMessage = ("Do you want to confirm this as your current infusion site location?")



	render() {
		if (this.state.preFillColor != "green") {

		}
		else {


		}


		console.log(this.state)



		let MAP = {
			name: "my-map",
			areas: this.state.areas
		}


		return (
			<div>
				{this.state.isShowing ? <div onClick={this.closeModalHandler} ></div> : null}

				{
					this.state.selectedArea?
					<Modal
						show={this.state.isShowing}
						close={this.closeModalHandler}
						beginSiteTracker={this.beginSiteTracker}
						areasSubmitHandler={this.areasSubmitHandler}
						removeLastAddedArea={this.removeLastAddedArea}
						selectedArea={this.state.selectedArea}

					></Modal> : ""
				}

				<div className="imagemap">
					<ImageMapper src={MaleBody} fillColor={this.state.preFillColor} map={MAP} width={710} height={535}
						button className="open-modal-btn"


						onClick={(area) => this.openModalHandler(area)}
						onImageClick={(evt) => this.updateArea(evt)}

					>


					</ImageMapper>
				</div>
			</div>







		);
	}
}


export default Body;