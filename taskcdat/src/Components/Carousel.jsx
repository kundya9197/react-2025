import { React, useState } from 'react';

function Carousel() {
    const Images = [
        {
            id: 1,
            title: dog1,
            img_url: "https://www.pexels.com/photo/adultybrown-and-white-siberian-husky-245037/",
        },
        {
            id: 2,
            title: dog2,
            img_url: "https://www.pexels.com/photo/adultybrown-and-white-siberian-husky-245037/",
        },
        {
            id: 3,
            title: dog3,
            img_url: "https://www.pexels.com/photo/adultybrown-and-white-siberian-husky-245037/",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIncrement = () => {
        if (currentIndex === Images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handleDecrement = () => {
        if (currentIndex === 0) {
            setCurrentIndex(Images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        // <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <img src={Images[currentIndex].img_url} alt={Images[currentIndex].title}
                    // className='w-70% h-70% object-cover rounded-lg shadow-lg'
                    />

                </div>
                <div className="flex gap-4 mb-2 mt-8">
                <button onClick={handleDecrement} className='bg-amber-500 p-3'>-</button>
                <button onClick={handleIncrement} className='bg-amber-500 p-3'>+</button>

                </div>
            </div>
        </div>
        // </div>
    )
}
export default Carousel;
