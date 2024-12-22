import Logo from "/assets/logotipo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



function Footer(){
    return (
        <>
            <footer className="bg-gradient-to-b from-blue-100 via-white to-blue-200 rounded-t-[30px]">
                <div className="container grid md:grid-cols-3">
                    <div className="flex justify-center items-center">
                        <a href="/"><img src={Logo} alt="" width="200px"/></a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3>Siga-nos </h3>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaXTwitter />
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full max-w-md  p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Newsletter</h2>

                                <form className="flex flex-col">
                                <input
                                    type="email"
                                    className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Email"
                                />

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                >
                                    Subscrever
                                </button>
                                </form>

                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="conatiner pb-5 divide-x-[3px]">
                        <p className="text-sm">&copy; Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer