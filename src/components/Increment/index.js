import React from "react";

class Increment extends React.Component {
  //want everything the component class has, but want to extend it.  Below will be the additional things the Increment class has
  constructor(props) {
    super(props);
    // super means get parents' properties (run the constructor function, extend with our own stuff)
    this.state = {
      counter: 0
      //this is called the initial state
    };
    //need to define handleClick in function so can use .this
    this.handleClick = this.handleClick.bind(this);
    //binding it to itself in this class
  }

  handleClick(diff) {
    //update the state so that counter = counter + 1
    //set state is how you update this.state.
    this.setState((state, props) => ({
      //this. is the class -- means it is in this class/component we have created
      counter: state.counter + diff
      //wrapped in brackets to show is not a function body but is an entity to be kept together
    }));
  }

  handleMinusClick() {
    this.handleClick(-1);
  }

  handlePlusClick() {
    this.handleClick(1);
  }

  //same as this.setState((state,props)) => {
  //return ....

  // render is a method of the component class.  can't use fat arrow bc
  render() {
    //declare that we've got a button
    return (
      <div>
        <button onClick={() => this.handleMinusClick()}>-</button>
        <div>{this.state.counter}</div>
        {/* use state because it needs to be changed.  curly braces to read javascript */}
        <button onClick={() => this.handlePlusClick()}>+</button>
      </div>
    );
  }
}

export default Increment;
