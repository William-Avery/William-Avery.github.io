import React from 'react'

export default function Selector(props) {
    const { onClick, selector, onImport, onExport } = props;

    return (
        <div style={{ marginTop: "10px", display: "flex" }}>
                <div style={{ display: "inline-block"}}>
                    <span>{selector}</span>
                    <h3>Board Controls</h3>    
                    <input type="file" id="file" name="file" multiple={0} onChange={(e) => onImport(e.target.files[0])}/>
                    <input type="button" value="EXPORT"  onClick={(e) => onExport(e.target.value)}/>
                </div>
                <div style={{ display: "inline-block", justifyContent: "space-between", maxWidth: "300px" }}>
                    <input type="button" value="WALL"  onClick={(e) => onClick(e.target.value)}/>
                    <input type="button" value="START" onClick={(e) => onClick(e.target.value)}/>
                    <input type="button" value="END"   onClick={(e) => onClick(e.target.value)}/>
                    <input type="button" value="CLEAR" onClick={(e) => onClick(e.target.value)}/>
                    <input type="button" value="PATH"  onClick={(e) => onClick(e.target.value)}/>
                </div>
            <br/>
        </div>
    )
}
