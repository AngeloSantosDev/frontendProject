import { Link } from "wouter"
import Hero from "../components/Hero"
import Destination from "/assets/icones/destination.png"
import CountryIcon from "/assets/icones/country.png"
import Memorys from "/assets/icones/memorys.png"
import Kilometer from "/assets/icones/kilometer.png"
import QuemSomos from "/assets/quem-somos.png"
import Viagens from "/assets/viagens.webp"

function Homepage(){
    return (
        <>
            <main className="overflow-x-hidden">
                <Hero />

                <div className="container">

                    <section className="py-24">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-10">
                            <div className="">
                                <h1 className="text-4xl font-semibold pb-3 ">Aventuras Mais Recentes</h1>
                                <div className="w-20 h-[1px] bg-black"></div>
                                <p className="text-lg mt-5">Cada viagem conta uma história, e as nossas últimas aventuras estão cheias de momentos inesquecíveis. Descubra os destinos que explorámos recentemente, os desafios que superámos e as culturas que nos inspiraram. Desde paisagens deslumbrantes a experiências autênticas, inspire-se para criar memórias únicas nas suas próximas viagens.</p>
                                <Link href="/lista-viagens">
                                    <button className="text-xl bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-8">
                                        Ver todas as viagens!
                                    </button>
                                </Link>
                            </div>
                            <div className="order-2 sm:order-1 justify-items-center">
                                    <img src={Viagens} alt="" className="rounded-lg max-w-96 "/>
                                </div>
                        </div>
                    </section>

                    <section className="pb-24">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                            <div className="order-2 sm:order-1 justify-items-center">
                                <img src={QuemSomos} alt="" className="rounded-lg max-w-96 "/>
                            </div>
                            <div className="order-1 sm:order-2">
                                <h1 className="text-4xl font-semibold pb-3">Quem Está Por Trás do Blog?</h1>
                                <div className="w-20 h-[1px] bg-black"></div>
                                <p className="text-lg mt-5">Este é o espaço onde partilhamos histórias, dicas e experiências de viagem. Desde destinos incríveis a conselhos práticos, o nosso objetivo é inspirar e ajudar quem deseja explorar o mundo de forma autêntica. Junte-se a nós nesta jornada e descubra tudo o que o mundo tem para oferecer!</p>
                            </div>
                        </div>

                    </section>

                    <section className="pb-24">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                            <div>
                                <h1 className="text-4xl font-semibold pb-3">Viagens em Números</h1>
                                <div className="w-20 h-[1px] bg-black"></div>
                                <p className="text-lg mt-5 pr-20">Cada viagem conta uma história, e os números revelam o impacto das nossas aventuras. Desde os destinos explorados até as memórias partilhadas, veja como transformamos o mundo num lugar para descobrir, inspirar e viver.</p>
                            </div>

                            <div>
                                <div className="sm:flex flex-wrap md:grid md:grid-cols-2 gap-5 ">
                                    <div className="mb-5">
                                        <img src={Destination} alt="" className="w-12" />
                                        <h2 className="text-2xl font-semibold">Países</h2>
                                        <p className="text-lg">45 explorados e cheios de histórias.</p>
                                    </div>
                                    <div className="mb-5">
                                        <img src={CountryIcon} alt="" className="w-12" />
                                        <h2 className="text-2xl font-semibold">Destinos</h2>
                                        <p className="text-lg">120 partilhados para inspirar as suas viagens.</p>
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap md:grid md:grid-cols-2 gap-5 mt-6">
                                    <div className="mb-5">
                                        <img src={Kilometer} alt="" className="w-12" />
                                        <h2 className="text-2xl font-semibold">Quilómetros</h2>
                                        <p className="text-lg">250.000 percorridos pelo mundo.</p>
                                    </div>
                                    <div className="mb-4">
                                        <img src={Memorys} alt="" className="w-12" />
                                        <h2 className="text-2xl font-semibold">Memórias</h2>
                                        <p className="text-lg">500+ momentos capturados em imagens.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                </div>

            </main>
        </>
    )
}

export default Homepage