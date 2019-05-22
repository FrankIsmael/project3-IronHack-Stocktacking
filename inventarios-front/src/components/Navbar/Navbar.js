import React from 'react';
import PropTypes from 'prop-types';
//import AuthService from '../auth/auth-service';


//const service = new AuthService()

const NavbarItem = props => (
  <a className="navbar-item is-capitalized" href={`${props.page}`}>
    {props.page}
  </a>
);
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  render() {
    let { pages = [], color } = this.props;
    let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />);
    return (
      <nav className={`navbar is-fixed-top is-${color}`}>
        <div className="navbar-brand">
          <NavbarItem page="logo" />
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {navbarItems}
          </div>
          <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href='/login'>
                    Log in
                  </a>
                </div>
              </div>
            </div>
        </div>

      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};
