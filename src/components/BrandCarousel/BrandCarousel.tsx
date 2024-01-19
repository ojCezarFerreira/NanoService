'use client';

import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

import styles from './BrandCarousel.module.css'

import brands from "@/data/brandsImages";
import Image from "next/image";

export default function BrandCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  function renderBrands() {
    const screenWidth = screen.width

    return brands.map((brand, i) => {
      return <div key={i}>
        <Image
          src={brand.brand}
          alt={brand.alt}
          width={screenWidth <= 1024 ? 100 : 250}
          height={screenWidth <= 1024 ? 100 : 250}
        />
      </div>
    })
  }

  return <Carousel
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={false} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1500}
    customTransition="500ms ease-in-out"
    keyBoardControl={false}
    containerClass={styles.carousel}
    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    itemClass="carousel-item-padding-40-px"
  >
    {renderBrands()}
  </Carousel>
}