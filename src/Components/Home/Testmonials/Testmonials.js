import React from "react";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import "./Testmonials.css";
import Testmonial from "../Testmonial/Testmonial";
const testimonialData = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];
const Testmonials = () => {
  return (
    <section>
      <div className="container testimonials my-5 py-5">
        <div className="section-header">
          <h5 className="text-primary text-uppercase">Testimonial</h5>
          <h1>
            What Our Patients <br /> Says{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {testimonialData.map((testmonial) => (
            <Testmonial testmonial={testmonial}></Testmonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
