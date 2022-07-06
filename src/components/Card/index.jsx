import React from "react"

import "./style.css"

function Card({
    productId,
    productName,
    imageUrl,
    listPrice,
    price,
    installments
}) {
    return (
        <div className="cardContainer">
            <img src={imageUrl} />
            <span className="productName">{productName}</span>
            <span className="listPrice">{listPrice}</span>
            <span className="price">{price}</span>
            <button>COMPRAR</button>
        </div>
    )
}


export default Card