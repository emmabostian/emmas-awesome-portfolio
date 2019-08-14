import React from "react";
import { Link } from "gatsby";

import "./navigation.css";

const Navigation = () => (
    <nav>
        <h3>Emma Wedekind</h3>
        <ul>
            <li><Link to="/" activeClassName='navigation__link--active'>Home</Link></li>
            <li><Link to="/writing" activeClassName='navigation__link--active'>Writing</Link></li>
            <li><Link to="/speaking" activeClassName='navigation__link--active'>Speaking</Link></li>
            <li><Link to="/podcasting" activeClassName='navigation__link--active'>Podcasting</Link></li>
        </ul>
    </nav>
)

export default Navigation;