import { Link } from "wouter"
import Form from "../components/Form";

function Contacts(){
    return (
        <>
            <section>
                <div className="relative h-[60vh] bg-[url('/assets/banner_travellist.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                    <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-5">Contactos</h1>
                        <p><Link href="/">Home</Link> / Contactos</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-12">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="">
                            <h2 className="text-2xl text-center">Adicionar viagem:</h2>
                            <Form />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl">Escreva-nos:</h2>
                            <div className="items-center ">
                                <h3 className="text-xl">Email</h3>
                                <a href="mailto:email@email.com">email@email.com</a>
                                <h3 className="text-xl">Telefone</h3>
                                <a href="tel:910000000">910 000 000</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>

            

        </>
    );
}

export default Contacts