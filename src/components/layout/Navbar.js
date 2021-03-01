import React, { Component } from 'react';

export class Navbar extends Component {
  static defaultProps = {
    icon: 'far fa-angry',
    title: 'Some title',
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
