import { Link } from "wouter"

function Header(){
    return (
        <>
            <header className="container mx-auto flex justify-between px-5 bg-red-400">
                <Link href="/">
                    <img src="" alt="Logo" />
                </Link>
                <nav>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Homepage</Link>
                </nav>
            </header>
        </>
    )
}

export default Header