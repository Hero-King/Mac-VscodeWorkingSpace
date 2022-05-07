import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        count: 0,
        title: "parent title",
      },
    };
  }
  handleClick = (e) => {
    console.log(e, this);
    const { obj } = this.state;
    this.setState({
      obj: {
        ...obj,
        count: obj.count + 1,
      },
    });
  };

  getBtnConfig = () => {
      return {
          onClick: this.handleClick
      }
  }

  render() {
    const { obj } = this.state;
    return (
      <div>
        父组件Count值: {obj.count}
        <button onClick={this.handleClick}>更改父组件count</button>
        {console.log("parent render")}
        <TestChild1 onClick={this.handleClick} />
      </div>
    );
  }
}

class TestChild1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
      return <div>
          <button {...this.props}>子组件</button>
      </div>
  }
}

export default Test;
