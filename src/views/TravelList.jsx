import { Link } from "wouter"
import { useEffect, useState } from "react"

function TravelList(){

    const [locations, setLocations] = useState([]);

    async function fetchDestinations(){
        const response = await fetch("/data/destinations.json");
        const result = await response.json();
        setLocations(result);
        console.log(result);
    }

    useEffect(function() {
        fetchDestinations()
      }, []);

    return (
        <>

            <section>
                <div className="relative h-[60vh] bg-[url('/assets/banner_travellist.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                    <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-5">Viagens</h1>
                        <p><Link href="/">Home</Link> / Viagens</p>
                    </div>
                </div>
            </section>
            <section className="mb-24">

                <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                    {locations.map((local) => (
                        <Link key={local.id} href={`/lista-viagens/${local.slug}`}>
                            <div className="relative bg-cover bg-center rounded-[40px] overflow-hidden w-full" style={{ backgroundImage: `url('${local.cardImage}')`, height: "auto", minHeight: "500px" }}>
                                <div className="absolute w-full bg-gradient-to-tl from-gray-500/85 to-gray-400/85 bottom-0 text-center text-white rounded-[40px] p-3">
                                    <h1 className="text-3xl font-semibold">{local.cityName}</h1>
                                    <p>{local.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>

        </>
    )
}

export default TravelList