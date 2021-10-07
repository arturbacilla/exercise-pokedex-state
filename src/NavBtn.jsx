import React from 'react';

class NavBtn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      direction: props.dir
    }
  }
 
  render() {
    return <button>{this.state.direction}</button>
  }
}

export default NavBtn;
