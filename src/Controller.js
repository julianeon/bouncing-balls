import React, { Component } from 'react';
import Viz from './Viz.js'

const ColorSelect = (props) => {
    return(
	    <select id={props.id} name={props.name} onChange={props.onChanger} value={props.value}>
  	    <ColorOption colors={props.colors}/>
	    </select>	    
    )
}

const ColorOption = (props) => {
    var c=[];
    c.push(<option disabled value="default">choose</option>);
    props.colors.map(item=> c.push(<option value={item}>{item}</option>));
    return(
	<React.Fragment>{c}</React.Fragment>
    )
    
}

export default class Controller extends Component {
  state = {
	  color: "", 
	  width: "", 
	  toDraw: [], 
	}

  onSubmit = (evt) => {
      evt.preventDefault();
	const newShape = {
  	   color: this.state.color, 
  	   width: this.state.width,
  	}
    this.setState({ toDraw: [...this.state.toDraw, newShape]})
  } 

  onChange = (evt) => {
  	this.setState({[evt.target.name]: evt.target.value})
  }

    render() {
	const colorArray = ["red","orange","yellow","blue","green"]
	return(
		<div className="controller">
		<form onSubmit={this.onSubmit}>
		<label htmlFor="colorSelect">pick a color:</label>
		<ColorSelect id="colorSelect" name="color" onChanger={this.onChange} value={this.state.color||"default"} colors={colorArray}/>
		<label htmlFor="pixelInput">how big:</label>
		<input id="pixelInput" name="width" onChange={this.onChange} />
		<button type="submit">draw!</button>
		</form>
		{ this.state.toDraw.length ? <Viz shapes={this.state.toDraw}/> : null}
	    </div>
    )
  }
}
