import React from "react";
import { Carousel } from "react-bootstrap";

export const CarousalPrac = () => {
    return (
        <div className="App">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100"src="Assets/city.jpg"alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Honkong</h3>
                            <p>Enjoye Your Holiday in <b>Beatutiful</b> City...  </p>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="Assets/river.jpg"alt="Second slide"/>
                        <Carousel.Caption>
                           <h3>River Riding</h3>
                            <p>Go With Your <b>Family</b> to the Island.. </p>
                        </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="Assets/hotel.jpg"alt="Third slide"/>
                        <Carousel.Caption>
                           <h3>Shang Shung Hotel</h3>
                            <p>Stay here and enjoy <b>5*****</b> Treat..... </p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/><br/><br/>
        </div>
    )
}