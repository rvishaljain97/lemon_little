import React from "react";
import food1 from "../images/food1.avif"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header className="container">
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>New York</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;