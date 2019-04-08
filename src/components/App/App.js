import React, { Component } from 'react'
import logo from './brm-logo.svg'
import './app.scss'

import Child from '../child/Child'

export class App extends Component {
  state = {
    fname: "",
    lname: "",
    fullname: null
  }

  /**
   * This function should handle changes to 'fname' field
   */
  handleFnameChange = (e) => {
    this.setState({
      fname: e.target.value
    })
  }

  /**
   * This function should handle changes to 'lname' field
   */
  handleLnameChange = (e) => {
    this.setState({
      lname: e.target.value
    })
  }

  /**
   * This function should somehow set the full name of the person and 
   * the Child component should recieve that full name as props
   */
  handleSubmit = () => {
    this.setState({
      fullname: this.state.fname + " " + this.state.lname
    })
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>BRM REACT CHALLENGES</h1>
        </header>

        <div className="container">
          <div className="form">
            <h2>The Challenge</h2>
            <p>After you enter a name and click submit, it should appear on the right side.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                First Name:
                <input type="text" id="fname" value={this.state.fname} onChange={this.handleFnameChange} />
              </label>
              <br />
              <label>
                Last Name:
                <input type="text" id="lname" value={this.state.lname} onChange={this.handleLnameChange} />
              </label>
              <br />
              <input 
                id="submit" 
                type="submit" 
                value="Submit"
                onClick={this.handleSubmit} />
            </form>
          </div>
          {/* The fullname props passed to Child needs to be dynamic */}
          <Child fullname={this.state.fullname}/>

        </div>

      </div>
    )
  }
}

export default App
