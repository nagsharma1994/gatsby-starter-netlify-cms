import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/bitwala-logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item">
                Bank Account
              </Link>
              <Link className="navbar-item">
                Trading
              </Link>
              <Link className="navbar-item">
                Card
              </Link>
              <Link className="navbar-item">
                Wallet
              </Link>
              <Link className="navbar-item">
                Careers
              </Link>
              <Link className="navbar-item">
                STO
              </Link>
              <label className="navbar-item">|</label>
              <Link className="navbar-item">
                EN
              </Link>
              <Link className="navbar-item">
                DE
              </Link>
              <Link className="navbar-item">
                Login
              </Link>
              <button>Free Account</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
