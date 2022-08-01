import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-instagram-square"></i>
        <i className="navIcon fa-brands fa-facebook-square"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <li className="navListItem" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>
        {user ? (
          <Link to="/settings">
            <img className="navImg" src={PF + user.profilePic} alt="avatar" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
