import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}