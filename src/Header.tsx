import { Link } from "react-router-dom";

export default function Header() {
    return (
    <nav className="navbar">
        <Link to={`news`}><button className="button">News</button></Link>
        <h1 className="navbar__header">🚀Space News🚀</h1>
        <Link to={`login`}><button className="button">Login</button></Link>
    </nav>);
}