import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const userImg = hasUser ? gravatar(user.email) : userIcon;
  const handleLogOut = () => {
    props.logoutRequest({});
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__img" alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userImg} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogOut}>
                Cerrar Sesión
              </a>
            </li>
          ) : null}
          {/* <li>
            <Link to="/">Cuenta</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/login">Cerrar sesión</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
