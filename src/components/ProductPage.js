import React, { useEffect } from "react";
import "../css/product.css";
import product1 from "../public/product1.png";
import product2 from "../public/product2.png";
import product3 from "../public/product3.png";

const ProductPage = () => {
  useEffect(() => {
    var animationTiming = 800; // Animation duration (ms)
    var animationCurve = "ease-in-out"; // Animation timing function
    const slides = document.getElementsByClassName("carousel-item");
    const totalSlides = slides.length;
    let slidePositionLeftFake = totalSlides - 1;
    let slidePositionLeft = 0;
    let slidePositionRight = 1;
    let slidePositionRightFake = 2;
    var animationInProgress = false;
    var animationSettings =
      "all " + animationTiming / 1000 + "s" + " " + animationCurve;

    document
      .getElementById("carousel-button--next")
      .addEventListener("click", function () {
        if (animationInProgress) {
          return false;
        } else {
          animateNext();
        }
      });

    function updateSlidePosition() {
      for (let slide of slides) {
        slide.classList.remove("carousel-item--visible");
        slide.classList.remove("right-slide");
        slide.classList.remove("left-slide");
        slide.classList.remove("right-fake-slide");
      }

      slides[slidePositionLeft].classList.add("carousel-item--visible");
      slides[slidePositionLeft].classList.add("left-slide");
      slides[slidePositionRight].classList.add("carousel-item--visible");
      slides[slidePositionRight].classList.add("right-slide");
      slides[slidePositionRightFake].classList.add("carousel-item--visible");
      slides[slidePositionRightFake].classList.add("right-fake-slide");
    }

    function moveToNextSlide() {
      if (slidePositionRightFake == totalSlides - 1) {
        slidePositionLeftFake++;
        slidePositionLeft++;
        slidePositionRight++;
        slidePositionRightFake = 0;
      } else if (slidePositionRight == totalSlides - 1) {
        slidePositionLeftFake++;
        slidePositionLeft++;
        slidePositionRight = 0;
        slidePositionRightFake++;
      } else if (slidePositionLeft == totalSlides - 1) {
        slidePositionLeftFake++;
        slidePositionLeft = 0;
        slidePositionRight++;
        slidePositionRightFake++;
      } else {
        slidePositionLeftFake++;
        slidePositionLeft++;
        slidePositionRight++;
        slidePositionRightFake++;
      }
    }

    function animateNext() {
      animationInProgress = true;
      let start = Date.now();
      let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        if (timePassed >= animationTiming) {
          animationInProgress = false;
          clearInterval(timer);
          slides[slidePositionLeftFake].style.transition = "none";
          slides[slidePositionLeftFake].style.transform = "translateX(0)";
          slides[slidePositionLeft].style.transition = "none";
          slides[slidePositionLeft].style.transform = "translateX(0)";
          slides[slidePositionRight].style.transition = "none";
          slides[slidePositionRight].style.transform = "translateX(0)";

          moveToNextSlide();
          updateSlidePosition();
          return;
        }

        slides[slidePositionLeftFake].style.transition = animationSettings;
        slides[slidePositionLeftFake].style.transform = "translateX(-250px)";
        slides[slidePositionLeft].style.transition = animationSettings;
        slides[slidePositionLeft].style.transform = "translateX(-250px)";
        slides[slidePositionRight].style.transition = animationSettings;
        slides[slidePositionRight].style.transform = "translateX(-250px)";
      });
    }
  });

  return (
    <section className="productPage">
      <div>
        <h4>Everyday items, we have something to suit every occasion.</h4>
        <p>
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </p>
        <a href="./">Shop all everyday items</a>
      </div>
      <div className="carousel">
        <div className="carousel-item carousel-item--visible left-slide">
          <img src={product1} />
          <div className="caption-text">365 Signature Hoodie</div>
          <div className="caption-detail">
            <div className="price">€33.95</div>
            <div className="colors">
              <div className="colorProduct1"></div>
              <div className="colorProduct2"></div>
              <div className="colorProduct3"></div>
              <div className="colorProduct4"></div>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-item--visible right-slide">
          <img src={product3} />
          <div className="caption-text">Organic Skinny High Waist Jeans</div>
          <div className="caption-detail">
            <div>€33.95</div>
            <div className="colors">
              <div className="colorProduct1"></div>
              <div className="colorProduct2"></div>
              <div className="colorProduct3"></div>
              <div className="colorProduct4"></div>
            </div>
          </div>
        </div>
        <div className="carousel-item  right-fake-slide carousel-item--visible">
          <img src={product2} />
          <div class="caption-text">Organic Skinny High Waist Jeans</div>
          <div className="caption-detail">
            <div>€33.95</div>
            <div className="colors">
              <div className="colorProduct1"></div>
              <div className="colorProduct2"></div>
              <div className="colorProduct3"></div>
              <div className="colorProduct4"></div>
            </div>
          </div>
        </div>

        <div className="carousel-button">
          <button id="carousel-button--next" aria-label="Next slide">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
