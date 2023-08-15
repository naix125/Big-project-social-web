import React from "react";
let Music =(props)=> {
    return (
        <div>
            <div>
                {props.musicname}
            </div>
            <div>
                {props.bandname}
            </div>
            <div>
                {props.duration}

            </div>
        </div>

    )
}
export default Music