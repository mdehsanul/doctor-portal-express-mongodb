import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container ">
        <div className="row ">
          <div>
            <h5 className="text-primary text-uppercase">Testimonial</h5>
            <h1>
              What Our Patients <br /> Says
            </h1>
          </div>
          <div className="col-md-4 d-flex ">
            {testimonialData.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;