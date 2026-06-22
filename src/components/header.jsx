import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LightDark from "./Lightdark";

import { useContext } from "react";
import { ThemeContext } from "../routes/ThemeContext";

function Header() {
  const { Light } = useContext(ThemeContext);

  const bag = useSelector((store) => store.bag);

  return (
    <>
      <header className={Light ? "" : "header_dark"} >
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/logo.png"
              alt="Myntra Home "
            />
          </Link>
        </div>
        <nav className={`nav_bar ${Light ? "" : "nav_bar_dark"}`}>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <CiSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <LightDark />

        <div className="action_bar">
          <Link
            className={`action_container ${!Light ? "doom" : ""}`}
            to="/login"
          >
            <span className="material-symbols-outlined action_icon">
              <IoMdPerson />
            </span>
            <span className="action_name">Profile</span>
          </Link>

          <div className={`action_container ${!Light ? "doom" : ""}`}>
            <span className="material-symbols-outlined action_icon">
              <FaRegHeart />
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <Link
            className={`action_container ${!Light ? "doom" : ""}`}
            to="/bag"
          >
            <span className="material-symbols-outlined action_icon">
              <FaShoppingBag />
            </span>
            <span
              className="action_name
               "
            >
              Bag
            </span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
