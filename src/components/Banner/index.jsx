import React from "react"

import "./style.css"
import bannerImage from "../../assets/Banner.jpg"
function Banner() {
    return(
        <div className="bannerContainer">
            <img src={bannerImage}/>
        </div>
    )
}

export default Banner