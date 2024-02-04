import React, { useState } from "react";
import "./App.css";
import hugBear from "./hug-bear-unscreen.gif";

function App() {
    const [message, setMessage] = useState(
        "Hi dear, will you be my valentine?"
    );
    const [currentImage, setCurrentImage] = useState(hugBear);

    return (
        <div className="App">
            <div className="App-header">
                <img src={currentImage} />
                <h1 className="text-xl font-bold tracking-tight text-gray-900">{message}</h1>
                <div className="flex m-5">
                    <button
                        type="submit"
                        class="mr-5 w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Yes
                    </button>
                    <button
                        type="submit"
                        class="w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
