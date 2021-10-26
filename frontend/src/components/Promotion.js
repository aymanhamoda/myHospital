import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import promotions from '../data/promotions'

const Promotion = () => {
  return (
    <div>
      <Carousel pause="hover" className="bg-dark">
        {promotions.map((promotion) => (
          <Carousel.Item key={promotion._id} >
            <a href={`${promotion.image}`}>
            <Image src={promotion.image} fluid />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Promotion
