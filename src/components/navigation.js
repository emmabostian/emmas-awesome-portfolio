import React from "react";
import { Link } from "gatsby";

import "./navigation.css";

const Navigation = () => (
    <nav className="nav">
        <h3 className="nav__title">Emma Wedekind</h3>
        <ul className="nav__list">
            <li><Link to="/" className="nav__link" activeClassName='navigation__link--active'>Home</Link></li>
            <li><Link to="/writing" className="nav__link" activeClassName='navigation__link--active'>Writing</Link></li>
            <li><Link to="/speaking" className="nav__link" activeClassName='navigation__link--active'>Speaking</Link></li>
            <li><Link to="/podcasting" className="nav__link" activeClassName='navigation__link--active'>Podcasting</Link></li>
        </ul>
    </nav>
)

export default Navigation;