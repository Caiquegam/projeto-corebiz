import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import axios from "axios";

import Card from "../Card";

import "./style.css"

function Carousel() {
    const [products, setProducts] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(() => {
        axios.get("https://corebiz-test.herokuapp.com/api/v1/products")
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="carouselContainer">
            <h1>Mais Vendidos</h1>
            <Slider {...settings}>
                {products.map((product) => (
                    <Card
                        key={product.productId}
                        productId={product.productId}
                        productName={product.productName}
                        imageUrl={product.imageUrl}
                        listPrice={product.listPrice}
                        price={product.price}
                        installments={product.installments}
                    />
                ))}
            </Slider>
        </div>
    )
}


export default Carousel