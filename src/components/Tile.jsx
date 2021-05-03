import React from "react";

const backgroundColor = color => {
    switch(color) {
        case "CLEAR":
            return "#FFF"; // CLEAR
        case "WALL":
            return "#363537"; // Wall
        case "START":
            return "#5FDD9D"; // Start
        case "END":
            return "#EF2D56";
        case "PATH":
            return "#FB62F6";
        default:
            return "#FFFFFF"; // Empty 
    }
}

export default function Tile(props) {
    const { tile, onClick } = props;
    
    return (
        <div onClick={() => onClick(tile.id)} style={{ padding: "4px", aspectRatio: 1, height: "60px", border: "1px solid #2a2d34", backgroundColor: `${backgroundColor(tile.type)}`}}>
            {tile.type}
        </div>
    );
}