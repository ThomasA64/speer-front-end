import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Mainpage() {
  return (
    <Carousel fade classname="hero">
      <Carousel.Item>
        <img
          className="hero-img d-block w-100"
          src="https://media.blogto.com/articles/2017713-coldplay.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button>Try it Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="hero-img d-block w-100"
          src="https://img1.wsimg.com/isteam/ip/65861a10-4dfa-4f4e-9cf4-010281680e76/AHP07467-0002.jpg/:/cr=t:5.36%25,l:0%25,w:100%25,h:89.29%25/rs=w:600,h:300,cg:true/fx-gs"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Try it Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="hero-img d-block w-100"
          src="http://www.riffyou.com/wp-content/uploads/2015/04/muse-2105.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button>Try it Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
