import React from "react";
import Music from "../music/music";



let Musicbar =()=>{
    let musicData=[
        {musicname: "never let you go", bandname:'mmj', duration:'2,45' },
        {musicname: "never let you go", bandname:'mmj', duration:'2,45' },
        {musicname: "never let you go", bandname:'mmj', duration:'2,45' },
        {musicname: "never let you go", bandname:'mmj', duration:'2,45' },
        {musicname: "never let you go", bandname:'mmj', duration:'2,45' },
    ]
    let musicElements =musicData.map (
        d=> <Music musicname={d.musicname}
        bandname={d.bandname}
        duration={d.duration} />
    )
    return (
 

        <div>
ee
ee
{musicElements}
        </div>
    )
}
export default Musicbar