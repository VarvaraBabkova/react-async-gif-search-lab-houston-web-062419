import React from "react"


export default class GilList extends React.Component{
  render(){
  	return (
	    <ul>
	    {
	    	this.props.urls.map(url => {
	    		return <li><img src={url} /><br/></li>
	    	})
	    }
	       
	    </ul>
  	)
  }
  
}
