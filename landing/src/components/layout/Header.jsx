import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="flex justify-center gap-4 pt-2">
                <Link to="https://www.linkedin.com/in/danimedie/" target="_blank">LinkedIn <span>↗</span></Link>
                <Link to="https://github.com/danimedie" target="_blank">GitHub <span>↗</span></Link>
            </nav>
        </header>
    );
}