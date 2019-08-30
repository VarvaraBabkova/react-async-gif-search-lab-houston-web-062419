
import React from "react"
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GilListContainer extends React.Component{

	constructor(){
		super()
		this.state = {
			urls:[],
			query: "YOUR QUERY HERE"
		}

	}

	showImage = () => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(res => res.json())
		.then(obj => {
			console.log(obj)
			let urls = []
			for (var i = 0; i < 3; i++) {
				//debugger
				urls.push(obj.data[i].images.original.url)
			}
			this.setState({urls: urls}, ()=>console.log(this.state.urls))
		})
	}

	handleSubmit = (e, search)=>{
		e.preventDefault()
		console.log(search)
		this.setState({query: search}, ()=>this.showImage())

	}

  render(){
  	return (
	    <div>
	        <GifList urls = {this.state.urls}/>
	        <GifSearch handleSubmit = {this.handleSubmit}/>
	    </div>
  	)
  }
  
}
