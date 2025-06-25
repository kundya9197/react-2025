import React, { useState } from 'react';

export default function Dashboard() {
    const [isExpandable, setIsExpandable] = useState(false);
    console.log("Working..", isExpandable);

    return (
        <>
            {/* Navbar */}
            <div className='container-fluid '>
                <div className="row p-3 bg-violet-500 text-white">
                    <div className="col-7 flex mx-auto">
                        <div className="row">
                            <div className="col-3">
                                <button
                                    onClick={() => setIsExpandable(!isExpandable)}
                                    className='text-left py-1 px-2 bg-white text-black'>
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </div>
                            <div className="col-4">
                                <h3>Dashboard</h3>
                            </div>
                        </div>

                    </div>
                    <div className='col-5'>
                        <span className='p-4'><i className="fa-solid fa-user"></i></span>
                        <span className="p-4"> <i className="fa-solid fa-bell"></i></span>
                    </div>
                </div>
                {/* left side section */}
                <div className="row flex text-left text-white">

                    {/* <div className={isExpandable?`col-1 bg-cyan-800 p-4`:`col-3 bg-cyan-800 p-4`}> */}
                    <div className={`${isExpandable ? 'col-3' : 'col-1'} bg-cyan-800 p-4`}>

                        {
                            isExpandable ?
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Help</li>
                                    <li>Settings</li>
                                </ul> :
                                <ul className='p-3'>
                                    <li><i className="fa-solid fa-bell"></i></li>
                                    <li><i className="fa-solid fa-bell"></i></li>
                                    <li><i className="fa-solid fa-bell"></i></li>
                                    <li><i className="fa-solid fa-bell"></i></li>
                                    <li><i className="fa-solid fa-bell"></i></li>
                                </ul>}
                    </div>
                    <div className="col-9 text-black">Remaining part of dashboard</div>
                </div>
            </div>

        </>
    )
}


// export default function Dashboard(){
//     return(
//         <div className="bg-violet-500">
//             <div className="row">
//                 <div className="col-7">
//                     Dashboard
//                 </div>
//                 <div className="col-5">
//                     <i className="fa-solid fa-user"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }