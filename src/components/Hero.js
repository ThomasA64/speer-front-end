import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

export default function Hero() {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="item1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://media.blogto.com/articles/2017713-coldplay.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">INTERACTIVE CONCERT EXPERIENCE</h3>
              <p>
                Experience your favourite artists like never before and from the
                comfort of your own home
              </p>
              <button className="btn-mix-noborder">
                {" "}
                <a href="/pricing">TRY IT NOW</a>
              </button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://img1.wsimg.com/isteam/ip/65861a10-4dfa-4f4e-9cf4-010281680e76/AHP07467-0002.jpg/:/cr=t:5.36%25,l:0%25,w:100%25,h:89.29%25/rs=w:600,h:300,cg:true/fx-gs"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">INTERACTIVE CONCERT EXPERIENCE</h3>
              <p>
                Experience your favourite artists like never before and from the
                comfort of your own home
              </p>
              <button className="btn-mix-noborder">
                {" "}
                <a href="/pricing">TRY IT NOW</a>
              </button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://www.riffyou.com/wp-content/uploads/2015/04/muse-2105.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">INTERACTIVE CONCERT EXPERIENCE</h3>
              <p>
                Experience your favourite artists like never before and from the
                comfort of your own home
              </p>
              <button className="btn-mix-noborder">
                {" "}
                <a href="/pricing">TRY IT NOW</a>
              </button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
