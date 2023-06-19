// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Header
