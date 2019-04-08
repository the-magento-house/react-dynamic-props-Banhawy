import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
        <h3>Hi! My name is {this.props.fullname}</h3>
      </div>
    )
  }
}

export default Child
