import React, { useEffect,useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './style.css';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.theme.default.css'
const testimonialData = [
    {
      name: 'Ronne Galle',
      role: 'Project Manager',
      imageSrc: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
    },
    {
      name: 'Missy Limana',
      role: 'Engineer',
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
    },
    {
      name: 'Martha Brown',
      role: 'Project Manager',
      imageSrc: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302',
      comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
    },
    {
      name: 'Hanna Lisem',
      role: 'Project Manager',
      imageSrc: 'https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303',
      comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
    },
  ];
function Employee() {
    const owlCarouselOptions = {
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          680: {
            items: 2,
            nav: false,
            loop: false,
          },
          1000: {
            items: 3,
            nav: true,
          },
        },
      };
    
      return (
        <div className="gtco-testimonials">
          <h1>Team</h1>
          <OwlCarousel className="owl-carousel1 owl-theme" {...owlCarouselOptions}>
            <div>
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                  alt=""
                />
                <div className="card-body">
                  <h5>
                    Ronne Galle <br />
                    <span> Project Manager </span>
                  </h5>
                  <p className="card-text">
                    “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat ”
                  </p>
                </div>
              </div>
            </div>
            {testimonialData.map((testimonial, index) => (
          <div key={index}>
            <div className="card text-center">
              <img className="card-img-top" src={testimonial.imageSrc} alt="" />
              <div className="card-body">
                <h5>
                  {testimonial.name} <br />
                  <span>{testimonial.role}</span>
                </h5>
                <p className="card-text">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
          </OwlCarousel>
        </div>
      );

}

export default Employee