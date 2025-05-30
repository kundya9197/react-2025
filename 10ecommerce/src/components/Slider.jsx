// import React, { useEffect, useState } from 'react'

// function Slider() {
//     const images = [
//         {
//             id: 1,
//             title: "first image",
//             image_url: "https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&w=600",
//         },
//         {
//             id: 2,
//             title: "second image",
//             image_url: "https://images.pexels.com/photos/247968/pexels-photo-247968.jpeg?auto=compress&cs=tinysrgb&w=600",
//         },
//         {
//             id: 3,
//             title: "third image",
//             image_url: "https://images.pexels.com/photos/17851004/pexels-photo-17851004/free-photo-of-funny-siberian-husky-dog-smiling-with-his-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600",
//         },
//     ]

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleIncrement = () => {
//         if (currentIndex === images.length - 1) {
//             setCurrentIndex(0);
//         } else {
//             setCurrentIndex(currentIndex + 1);
//         }
//     }

//     const handleDecrement = () => {
//         if (currentIndex === 0) {
//             setCurrentIndex(images.length - 1);
//         } else {
//             setCurrentIndex(currentIndex - 1);
//         }
//     }

//     // useEffect(()=>{
//     //     setInterval(()=>{

//     //     },1000)
//     // },[])

//     return (
//         <div className="flex flex-col items-center p-4">
//             <div className="mb-4">
//                 <img 
//                     src={images[currentIndex].image_url} 
//                     alt={images[currentIndex].title}
//                     className="w-70% h-70% object-cover rounded-lg shadow-lg"
//                 />
//             </div>
//             <div className="flex gap-3">
//                 <button 
//                     onClick={handleDecrement}
//                     className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
//                 > 
//                     Previous 
//                 </button>
//                 <button 
//                     onClick={handleIncrement}
//                     className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
//                 > 
//                     Next 
//                 </button>
//             </div>
//             <div className="mt-2 text-gray-600">
//                 {currentIndex + 1} of {images.length}
//             </div>
//         </div>
//     )
// }

// export default Slider

import React, { useState, useEffect } from 'react'

function Slider() {
    const images = [
        {
            id: 1,
            title: "first image",
            image_url: "https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            title: "second image",
            image_url: "https://images.pexels.com/photos/2133205/pexels-photo-2133205.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            title: "third image",
            image_url: "https://images.pexels.com/photos/11029316/pexels-photo-11029316.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup interval
    }, [isAutoPlay, images.length]);

    const handleIncrement = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const handleDecrement = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div className="flex flex-col items-center p-4">
            <div className="mb-4">
                <img 
                    src={images[currentIndex].image_url} 
                    alt={images[currentIndex].title}
                    className="w-70% h-70% object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="flex gap-4 mb-2">
                <button 
                    onClick={handleDecrement}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                > 
                    Previous 
                </button>
                <button 
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`px-4 py-2 text-white rounded transition-colors ${
                        isAutoPlay ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                > 
                    {isAutoPlay ? 'Pause' : 'Play'}
                </button>
                <button 
                    onClick={handleIncrement}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                > 
                    Next 
                </button>
            </div>
            <div className="mt-2 text-gray-600">
                {currentIndex + 1} of {images.length}
            </div>
        </div>
    )
}

export default Slider