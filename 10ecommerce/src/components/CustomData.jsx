import React from 'react'

function CustomData() {
    const images = [
        {
            id:1,
            title:"husky",
            img_url:"/public/Images/husky.jpg"
        },
        {
            id:2,
            title:"golden-retriever",
            img_url:"https://images.pexels.com/photos/11702792/pexels-photo-11702792.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            title:"german-shepherd",
            img_url:"https://images.pexels.com/photos/6298553/pexels-photo-6298553.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:4,
            title:"siberian-husky",
            img_url:"https://images.pexels.com/photos/29112297/pexels-photo-29112297/free-photo-of-joyful-brown-siberian-husky-outdoors-portrait.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]
  return (
    <>
        <div className="flex  bg-gray-500">
            <div className="flex flex-row flex-wrap ">
                {images.map((item)=>
                <div key={item.id } className='rounded-lg text-center bg-cyan-300 w-1/3'>
                    <img src={item.img_url} alt="image not found" className=''/>
                    <p className='text-2xl'>{item.title}</p>
                </div>
                )}
            </div>
        </div>
    </>
  )
}

export default CustomData;