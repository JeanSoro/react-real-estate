import React, { Component} from 'react'

export default class Header extends Component {
  state = {
    name: 'Jean'
  };
  
  render () {
    return (
      <header>
        <div className="logo">Real Estate App</div>
          <nav>
            <a href="#">create Ads</a>
            <a href="#">About Us</a>
            <a href="#">Log In</a>
            <a href="#" className="register-btn">Register</a>
          </nav>
      </header>
    )
  }
}
