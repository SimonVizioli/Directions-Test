import React from "react";
import Map from "./Map";

const App: React.FC = () => {
    const startCoords: [number, number] = [-32.888355, -68.838844]; // Example start coordinates
    const endCoords: [number, number] = [-33.3, -66.34]; // Example end coordinates

    return (
        <div>
            <Map startCoords={startCoords} endCoords={endCoords} />
        </div>
    );
};

export default App;
