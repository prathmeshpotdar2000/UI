import React from "react";
// import ReactDom from "react-dom";

class FunctionDemo extends React.Component{

	constructor(props){
		super(props);
		this.show=this.show.bind(this);
	}
	show(){
	   alert("I am show function");
	}
	
	render(){
		return( <input type= 'Button' value='Click Me' name='s' onClick={this.show}/>);
	}
}
export default FunctionDemo;