import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [categories, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/5104346/pexels-photo-5104346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="sidebarImg"
          alt="about"
        />
        <p className="sidebarText">
          Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada
          fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => (
            <Link
              to={`/?cat=${category.name}`}
              key={category.name}
              className="link"
            >
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}