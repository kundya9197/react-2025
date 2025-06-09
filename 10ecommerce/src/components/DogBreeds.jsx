// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const DogBreeds = () => {
//     const [breeds, setBreeds] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchBreeds = async () => {
//         try {
//             const response = await fetch("https://api.thedogapi.com/v1/breeds");
//             const data = await response.json();
//             setBreeds(data);
//         } catch (error) {
//             console.error("Error fetching dog breeds:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchBreeds();
//     }, []);
//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4 text-center">Dog Breeds</h1>

//             {loading ? (
//                 <p className="text-center">Loading...</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {breeds.map((breed) => (
//                         <div key={breed.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
//                             <img
//                                 src={breed.image && breed.image.url ? breed.image.url : "https://via.placeholder.com/300x200?text=No+Image"}
//                                 alt={breed.name}
//                                 className="w-full h-48 object-cover"
//                                 // onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }}
//                             />
//                             <div className="p-4">
//                                 <h2 className="text-xl font-semibold">{breed.name}</h2>
//                                 <p><strong>Breed Group:</strong> {breed.breed_group || "N/A"}</p>
//                                 <p><strong>Life Span:</strong> {breed.life_span}</p>
//                                 <p><strong>Temperament:</strong> {breed.temperament}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DogBreeds;


import React, { useEffect, useState } from "react";

const DogBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBreedsWithImages = async () => {
        try {
            // First, get all breed names from dog.ceo API
            const breedsResponse = await fetch("https://dog.ceo/api/breeds/list/all");
            const breedsData = await breedsResponse.json();

            if (breedsData.status !== "success") {
                throw new Error("Failed to fetch breeds");
            }

            const breedNames = Object.keys(breedsData.message);

            // Fetch breed details and images
            const breedPromises = breedNames.slice(0, 20).map(async (breedName) => {
                try {
                    // Get breed image
                    const imageResponse = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
                    const imageData = await imageResponse.json();

                    // Get breed info from thedogapi (if available)
                    const infoResponse = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breedName}`);
                    const infoData = await infoResponse.json();

                    const breedInfo = infoData.length > 0 ? infoData[0] : {};

                    return {
                        id: breedName,
                        name: breedName.charAt(0).toUpperCase() + breedName.slice(1),
                        image: imageData.status === "success" ? imageData.message : "https://via.placeholder.com/300x200?text=No+Image",
                        breed_group: breedInfo.breed_group || "Mixed",
                        life_span: breedInfo.life_span || "10-15 years",
                        temperament: breedInfo.temperament || "Friendly, Loyal, Energetic",
                        weight: breedInfo.weight?.metric || "15-30 kg",
                        height: breedInfo.height?.metric || "30-60 cm"
                    };
                } catch (error) {
                    console.error(`Error fetching data for ${breedName}:`, error);
                    return {
                        id: breedName,
                        name: breedName.charAt(0).toUpperCase() + breedName.slice(1),
                        image: "https://via.placeholder.com/300x200?text=No+Image",
                        breed_group: "Unknown",
                        life_span: "10-15 years",
                        temperament: "Friendly, Loyal",
                        weight: "15-30 kg",
                        height: "30-60 cm"
                    };
                }
            });

            const breedsWithImages = await Promise.all(breedPromises);
            setBreeds(breedsWithImages);
        } catch (error) {
            console.error("Error fetching dog breeds:", error);
            // Fallback: Use dog.ceo API only
            try {
                const fallbackBreeds = await fetchFallbackBreeds();
                setBreeds(fallbackBreeds);
            } catch (fallbackError) {
                console.error("Fallback also failed:", fallbackError);
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchFallbackBreeds = async () => {
        const commonBreeds = ['labrador', 'golden', 'bulldog', 'poodle', 'husky', 'beagle', 'rottweiler', 'germanshepherd'];

        const breedPromises = commonBreeds.map(async (breed) => {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                const data = await response.json();

                return {
                    id: breed,
                    name: breed.charAt(0).toUpperCase() + breed.slice(1).replace(/([A-Z])/g, ' $1'),
                    image: data.status === "success" ? data.message : "https://via.placeholder.com/300x200?text=No+Image",
                    breed_group: "Popular Breed",
                    life_span: "10-15 years",
                    temperament: "Friendly, Loyal, Energetic",
                    weight: "15-35 kg",
                    height: "40-65 cm"
                };
            } catch (error) {
                return {
                    id: breed,
                    name: breed.charAt(0).toUpperCase() + breed.slice(1),
                    image: "https://via.placeholder.com/300x200?text=No+Image",
                    breed_group: "Popular Breed",
                    life_span: "10-15 years",
                    temperament: "Friendly, Loyal",
                    weight: "15-35 kg",
                    height: "40-65 cm"
                };
            }
        });

        return await Promise.all(breedPromises);
    };

    useEffect(() => {
        fetchBreedsWithImages();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 bg-white rounded-lg shadow-md p-6">
                    🐕 Dog Breeds Gallery
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                        <p className="ml-4 text-xl text-gray-600">Loading adorable dogs...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {breeds.map((breed) => (
                            <div key={breed.id} className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="relative">
                                    <img
                                        src={breed.image}
                                        alt={breed.name}
                                        className="w-full h-56 object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/300x200?text=Beautiful+Dog";
                                        }}
                                    />
                                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                                        {breed.breed_group}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{breed.name}</h2>

                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <span className="font-semibold text-blue-600 w-20">Life Span:</span>
                                            <span>{breed.life_span}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <span className="font-semibold text-green-600 w-20">Weight:</span>
                                            <span>{breed.weight}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <span className="font-semibold text-purple-600 w-20">Height:</span>
                                            <span>{breed.height}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="font-semibold text-orange-600 mb-2">Temperament:</p>
                                        <p className="text-gray-700 text-sm leading-relaxed">{breed.temperament}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && breeds.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No breeds found. Please try again later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DogBreeds;