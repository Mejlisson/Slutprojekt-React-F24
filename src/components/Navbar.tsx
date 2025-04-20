import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-comicYellow p4 flex justify-center gap-4 text-black text-lg">
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/creators">Creators</Link>
            <Link to="/search">Search</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/ratings">Ratings</Link>
        </nav>
    );
}
