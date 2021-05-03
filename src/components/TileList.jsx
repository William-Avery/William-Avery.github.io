import React from 'react'
import { Tile } from "./index";

export default function TileList(props) {
    const { tiles, columns, handleClick } = props;

    const tileList = tiles.map((tile) => {
        return(
            <Tile key={tile.id} tile={tile} onClick={handleClick} />
        )
    })

    return (
        <div style={{ display:"grid", gridTemplateColumns:`repeat(${columns}, 5rem)`, gridGap:"2px"}}>
            {tileList}
        </div>
    );
}
