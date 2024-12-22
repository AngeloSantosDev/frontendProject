import { useEffect } from "react";
import { Link } from "wouter"

function Form() {

    useEffect(() => {
        const btnSubmit = document.querySelector("#btnSubmit");
        
        function showData(event){
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const email = document.querySelector("#email").value;
            const visitedCity = document.querySelector("#visitedCity").value;
            const travelDate = document.querySelector("#travelDate").value;
            const termsAccepted = document.querySelector("#termsAccepted").checked;

            console.log("Username: " + username);
            console.log("Email: " + email);
            console.log("Cidade visitada: " + visitedCity);
            console.log("Data da viagem: " + travelDate);
            console.log("Termos e condições: " + termsAccepted);
        }

        if (btnSubmit) {
            btnSubmit.addEventListener("click", showData);
        }

    }, []);

    return (
        <>  
            <div className="flex flex-col justify-center sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                    Nome
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                        type="text"
                                        name="username"
                                        id="username"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="visitedCity">
                                    Cidade visitada
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                        type="text"
                                        name="visitedCity"
                                        id="visitedCity"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="travelDate">
                                    Data da viagem
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                        type="date"
                                        name="travelDate"
                                        id="travelDate"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        type="checkbox"
                                        name="termsAccepted"
                                        id="termsAccepted"
                                    />
                                    <label
                                        className="ml-2 block text-sm text-gray-900"
                                        htmlFor="termsAccepted"
                                    >
                                        Concordo com os <Link href="/termos-e-condicoes" className="underline">termos e condições</Link> 
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="btnSubmit"
                                    type="button"
                                >
                                    Submeter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
