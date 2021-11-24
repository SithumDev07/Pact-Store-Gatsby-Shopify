import * as React from "react"
import PropTypes from "prop-types"
import Logo from "../components/icons/Logo"
import Bag from "../components/icons/Bag"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="w-screen overflow-hidden">
      <div className="bg-theme-gray h-14 w-full text-center text-gray-100 text-sm flex justify-center items-center">
        <p>Free Shipping on order over <span className="font-extrabold">$100</span></p>
      </div>
      <nav className="h-20 bg-gray-50 hover:bg-theme-hover-gray transform transition duration-500 flex items-center justify-between px-14">
        <ul className="flex items-center font-Aventra text-gray-800">
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/women">Women</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/men">Men</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/baby">Baby</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/kids">Kids</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/bed">Bed</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/bath">Bath</Link>
        </ul>
        <Link to="/">
          <Logo height="auto" width={130} />
        </Link>
        <ul className="flex items-center font-Aventra text-gray-800">
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/about">About</Link>
          <Link className="hover:bg-theme-gray transform transition duration-300 hover:text-gray-50 px-5 py-2 lg:text-sm xl:text-base" to="/my-account">My Account</Link>
          <Link className="flex items-center ml-4" to="/cart"><Bag stroke="#4C4C4C" width={30} height={30} /> <p className="ml-2">0</p></Link>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
