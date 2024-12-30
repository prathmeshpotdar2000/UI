import NavBar from "./App";
import HeroBanner from "./App1";
import Footer from "./Footer";
import React from "react";
import FunctionDemo from "./FunctionDemo";

export default class MainApp extends React.Component{
    render(){
        return(<>
        <NavBar/>
        <HeroBanner/>
        <Footer/>
		<FunctionDemo/>
        </>);
    }
}