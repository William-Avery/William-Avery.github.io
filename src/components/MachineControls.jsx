import React from 'react'

export default function MachineControls(props) {
    return (
        <div style={{ marginTop: "10px" }}>
                <h3>Bot Controls</h3>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "390px" }}>
                    <input type="button" value="TRAIN" onClick={(e) => onClick(e.target.value)}/>              
                </div>
            <br/>
        </div>
    )
}
