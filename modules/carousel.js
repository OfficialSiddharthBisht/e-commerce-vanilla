function carousel(){
    return(
        `
        <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="/img/hero1.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h2>Discover Fashion In Our Site</h2>
            <p>We have the ongoing top notch fashion in our site.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="/img/hero2.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h2>Ecofriendly High Quality Clothes</h2>
            <p>No Synthetic clothes here 100% natural and eco friendly .</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="/img/hero4.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h2>We are the brand which cares for its family</h2>
            <p>We never say customers we have our family which buys our products.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        `
    )
}

export default carousel;