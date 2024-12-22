import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react"
import { FaMapPin } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "wouter"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import ImgParis from "./../../public/assets/torre-eiffel.png"
import { div, p } from 'motion/react-client';
function TravelDetail({ params }){

    const [location, setLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    
    async function fetchLocation(){
        const response = await fetch("/data/destinations.json");
        const result = await response.json();
        const filteredResult = result.filter (
            (value) => value.slug == params.slug
        );
        if (filteredResult.length === 1) {
            setLocation(filteredResult[0]);
        }
    }

    useEffect(function() {
        fetchLocation()
    }, [params]);


    async function weather(lat, lon){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e08354ae4668da320da41a95c8821992`);
        const result = await response.json();
        setWeatherData(result);
        console.log(result);
    }

   

    {/*async function weatherForecast(lat, lon){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e08354ae4668da320da41a95c8821992`);
        const result = await response.json();
        setWeatherData(result);
        console.log("forecast" + result);
    }*/}

    useEffect(() => {
        if (location && location.lat && location.lon) {
          weather(location.lat, location.lon);
        }
    }, [location]);
        
    

    return (
        <>

            {location ? (
                <>
                    <section>
                        <div className="relative h-[60vh]  bg-cover bg-center" style={{ backgroundImage: `url('${location.bannerDetail}')`}}>
                            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                            <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
                                <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-5">{location.cityName}</h1>
                                <p><Link href="/">Home</Link> / <Link href="/lista-viagens">Viagens</Link> / {location.cityName}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container grid md:grid-cols-3 gap-4">
                            <div className="col-span-1 md:col-span-2 pt-10">
                                <div className="flex flex-wrap gap-4 pb-4">
                                    <div>
                                        <p className="flex items-center"><MdOutlineDateRange /><span className="pl-2">{location.date}</span></p>
                                    </div>
                                    <div>
                                        <p className="flex items-center"><FaMapPin /><span className="pl-2">{location.country}</span></p>
                                    </div>
                                </div>
                                <h1 className="text-3xl pb-8">O que posso esperar de {location.cityName}?</h1>
                                {location.shortDescription.map((paragraph, index) =>(
                                    <p key={index} className="pb-5">{paragraph}</p>
                                ))}
                                <h2 className="text-2xl py-5">O que ver e fazer em {location.cityName}</h2>
                                <div className="">
                                    {location.topics.map((topic) => (
                                        <ol className="list-decimal">
                                            {topic.items.map((item, index) => (
                                                <li key={index} className="pb-2"><strong>{item.title}:</strong> {item.description}</li>
                                            ))}
                                        </ol>
                                    ))}
                                </div>
                                <div className="mb-12">
                                    <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                        className="mySwiper"
                                        style={{
                                            width: '100%', // Garante que o Swiper ocupa 100% do contêiner
                                        }}
                                    >
                                        {location.gallery.map((slide) => (
                                            <div key={slide.id}>
                                                {slide.image.map((img, index) => (
                                                    <SwiperSlide 
                                                        key={index}
                                                        style={{
                                                            display: 'flex', 
                                                            justifyContent: 'center', 
                                                            alignItems: 'center',
                                                            width: '100%', // Garante que o slide ocupa toda a largura
                                                        }}
                                                    >
                                                        <img 
                                                            src={img.path} 
                                                            alt="" 
                                                            style={{
                                                                width: '100%', // Usa 100% do espaço disponível
                                                                height: 'auto', // Mantém a proporção
                                                                objectFit: 'cover', // Ajusta a imagem ao espaço
                                                            }}
                                                            className="w-full h-auto" // Responsividade para todos os dispositivos
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </div>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:col-span-1 pt-10">
                                <div className="lg:sticky lg:top-0 pt-10">
                                    {weatherData ? (
                                        <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-50 dark:text-gray-800">
                                            <div className="space-x-8">
                                                
                                                <h1 className="text-xl font-semibold">Temperatura atual:</h1>
                                                <p className="font-bold text-6xl">{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
                                                
                                            </div>
                                        </div>
                                        
                                    ) : (
                                        location && <p>Carregando dados climáticos...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                ) : (
                    <>
                    <p>Loading...</p>
                    </>
            )}

            
        </>
    )
}

export default TravelDetail