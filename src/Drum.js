import React from 'react'
import './App.css';


export default function Drum(props) {
    return (
        <div
            id={'drum' + props.pad.name}
            className="drum-pad d-flex align-items-center justify-content-center rounded"
            onClick={(e) => {
                console.log('propsy: ', props)
                props.handleClick(props.pad.name, e.target)
            }}
        //onMouseUp={(e) => {
        //    e.target.style.backgroundColor = 'rgb(78, 156, 0)'
        //}}

        >
            <audio className="clip" id={props.pad.name} src={props.pad.sound}  ></audio>
            <h3>{props.pad.name}</h3>
        </div>
    )
}
