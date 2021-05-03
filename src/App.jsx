import React, { useState, useEffect } from 'react'
import { TileList } from "./components/index";
import Selector from "./components/Selector";
import { TileClass } from "./classes/TileClass"
import MachineControls from './components/MachineControls';
import { ExportFile } from "./classes/StateManager";
import "./App.css"


export default function App(props) {
    const [count, setCount] = useState(56); // Count of tiles
    const [tiles, setTiles] = useState([])
    const [selector, setSelector] = useState("CLEAR");
    const [file, setFile] = useState(null);

    handleBoardMenuChange = (value) => {
        setSelector(value);
    }

    handleClick = (value) => {
        const tileIndex = tiles.findIndex((tile) => tile.id === value);
        let items = [...tiles];
        let item = {...tiles[tileIndex]}
        item.type = selector;
        items[tileIndex] = item;
        setTiles(items);
    }

    onFileImport = (path) => {
        const reader = new FileReader();
        reader.readAsText(path);
        reader.onload = function() {
            const result = JSON.parse(reader.result);
            setTiles(result);
        }
    }

    onFileExport = () => {
        ExportFile(tiles);
    }

    useEffect(() => {
        let list = [];
        for(let i = 0; i < count; i++) {
            list.push(new TileClass())
        }
        setTiles(list);
        document.title = "Pathing Experiment";
    }, [])

    return (
        <>
            <MachineControls  />
            <TileList tiles={tiles} columns={8} handleClick={(value) => handleClick(value)} />
            <Selector 
                onClick={(value) => handleBoardMenuChange(value)}
                selector={selector} 
                onImport={(event) => onFileImport(event)}
                onExport={() => onFileExport()}
            />
        </>
    )
}
