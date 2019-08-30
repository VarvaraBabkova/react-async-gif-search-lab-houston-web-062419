import React from "react"


export default class GitSearch extends React.Component{

	state={
		search:''
	}

	handleUserInputChange=(event)=>{
		console.log(event.target.value)
	    this.setState({
	      search: event.target.value,
    });
	}


  render(){
  	return (
	    <form onSubmit={(e)=>this.props.handleSubmit(e, this.state.search)}>
	        <p> Enter your text here:</p>
	        <input type="text" onChange={this.handleUserInputChange} value={this.state.search}/>
	        <button type="submit" >Search</button>
	    </form>
  	)
  }
  
}
