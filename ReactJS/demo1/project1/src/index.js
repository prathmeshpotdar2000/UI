import React, { Component } from "react";
import "./index.css"; // External CSS

class indexedDB extends Component {
  constructor(props) {
    super(props);
    // Initialize two variables in the constructor
    this.state = {
      num1: 10,
      num2: 20,
      sum: null, // To store the calculated sum
    };
  }

  // Method to calculate addition
  calculateAddition = () => {
    const { num1, num2 } = this.state;
    this.setState({ sum: num1 + num2 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Addition Calculator</h2>
        <p>
          First Number: <strong>{this.state.num1}</strong>
        </p>
        <p>
          Second Number: <strong>{this.state.num2}</strong>
        </p>
        {/* Button to calculate addition */}
        <button className="button" onClick={this.calculateAddition}>
          Calculate Add
        </button>

        {/* Display the result if calculated */}
        {this.state.sum !== null && (
          <p className="result">The Sum is: {this.state.sum}</p>
        )}
      </div>
    );
  }
}

export default indexedDB;
