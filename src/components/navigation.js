import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/writing">Writing</Link></li>
            <li><Link to="/speaking">Speaking</Link></li>
            <li><Link to="/podcasting">Podcasting</Link></li>
        </ul>
    </nav>
)

export default Navigation;