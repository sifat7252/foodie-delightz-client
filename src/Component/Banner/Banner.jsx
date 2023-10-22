const Banner = () => {
  return (
    <div>
      <div className="lg:h-[70vh]  mx-auto">
        <div className="carousel h-60  lg:h-full w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="bg-image1 w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full bg-image2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full bg-image3"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full bg-image4"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
