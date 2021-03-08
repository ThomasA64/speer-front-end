import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Mainpage() {
  return (
    <Carousel fade classname="hero container-fluid">
      <Carousel.Item>
        <img
          className="hero-img d-block w-100"
          src="https://media.blogto.com/articles/2017713-coldplay.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <h2>
            Experience your favourite artists like never before and from the
            comfort of your own home
          </h2>
          <button className="btn-mix-noborder">
            {" "}
            <a href="/pricing">TRY IT NOW</a>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="hero-img d-block w-100"
          src="http://www.riffyou.com/wp-content/uploads/2015/04/muse-2105.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <h2>
            Experience your favourite artists like never before and from the
            comfort of your own home
          </h2>
          <button className="btn-mix-noborder">
            {" "}
            <a href="/pricing">TRY IT NOW</a>
          </button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="hero-img d-block w-100"
          src="https://media.blogto.com/articles/2017713-coldplay.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <h2>
            Experience your favourite artists like never before and from the
            comfort of your own home
          </h2>
          <button className="btn-mix-noborder">
            {" "}
            <a href="/pricing">TRY IT NOW</a>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
