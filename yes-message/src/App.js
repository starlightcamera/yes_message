import React, { useState } from "react";
import "./App.css";
import hugBear from "./hug-bear-unscreen.gif";
import loveBear from "./cute-love-bear-unscreen.gif";

function App() {
    const [message, setMessage] = useState(
        "Hi, will you be my valentine?"
    );
    const [currentImage, setCurrentImage] = useState(loveBear);
    const [buttonPosition, setButtonPosition] = useState({
        top: "50%",
        left: "50%",
    });

    const handleButtonClick = () => {
        // Generate random values for top and left positions
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;

        // Update button position
        setButtonPosition({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
        });
    };

    const yesClicked = () => {
        setCurrentImage(hugBear);
        setMessage("Yay!! See you on 14 February! <3");
    };

    return (
        <div className="App">
            <div className="App-header">
                <img src={currentImage} />
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                    {message}
                </h1>
                <div className="flex m-5">
                    <button
                        type="submit"
                        className="mr-5 w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={yesClicked}>
                        Yes
                    </button>
                    <button
                        type="submit"
                        className="items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        style={{
                            position: "absolute",
                            top: buttonPosition.top,
                            left: buttonPosition.left,
                        }}
                        onMouseOver={handleButtonClick}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
