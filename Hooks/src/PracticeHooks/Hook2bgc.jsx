import React,{useState} from 'react'

function Hook2bgc() {
    const [color, setColor] = useState("olive")
    return (
        <div className='w-full h-screen'
            style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
                    <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "red" }}>
                            Red
                    </button>
                    <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "cyan" }}>
                            Cyan
                    </button>
                    <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "blue" }}>
                            Blue
                    </button>
                    <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "orange" }}>
                            Orange
                    </button>
                    <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "purple" }}>
                            Purple
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hook2bgc