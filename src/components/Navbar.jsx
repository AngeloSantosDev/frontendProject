import { Link } from "wouter"
import Logo from "/assets/logotipo.png"
import { MdMenu } from "react-icons/md";

function Navbar(){
    return (
        <>
            <header className="text-white py-8">
                <div className="container flex justify-between items-center">
                    <div >
                        <img src={Logo} alt="" className="max-w-[100px]"/>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4 relative z-40">
                            <Link href="/" className="inline-block text-base font-semibold py-2 px-3 uppercase">Home</Link>
                            <Link href="/lista-viagens" className="inline-block text-base font-semibold py-2 px-3 uppercase">Lista Viagens</Link>
                            <Link href="/contactos" className="inline-block text-base font-semibold py-2 px-3 uppercase">Contactos</Link>
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <MdMenu className="text-4xl"/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar