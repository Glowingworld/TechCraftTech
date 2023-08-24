"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Container, Grid } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nathan Feng",
    designation: "Co-Founder at Hekima Ni Uhuru",
    content:
      "The service is simply amazing! I'm not just talking about the quality of the product, I'm also talking about the communication and the desire for me to be satisfied. A pleasure to work with, I will continue to work with them many times. Thanks!",
    image: "/images/testimonials/udsm.png",
    star: 5,
  },
  {
    id: 1,
    name: "Nathan Feng",
    designation: "Co-Founder at Hekima Ni Uhuru",
    content:
      "The service is simply amazing! I'm not just talking about the quality of the product, I'm also talking about the communication and the desire for me to be satisfied. A pleasure to work with, I will continue to work with them many times. Thanks!",
    image: "/images/testimonials/udsm.png",
    star: 5,
  },
  {
    id: 1,
    name: "Nathan Feng",
    designation: "Co-Founder at Hekima Ni Uhuru",
    content:
      "The service is simply amazing! I'm not just talking about the quality of the product, I'm also talking about the communication and the desire for me to be satisfied. A pleasure to work with, I will continue to work with them many times. Thanks!",
    image: "/images/testimonials/udsm.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-8 md:py-8 lg:py-16">
      <div className="container">
        <SectionTitle title="Our customers" paragraph="" center />
        <div>
          <Carousel
            withIndicators
            loop
            align="center"
            height={400}
            slideSize="40%"
            slideGap="xs"
            breakpoints={[
              { maxWidth: "sm", slideSize: "80%", slideGap: "xs" },
              { maxWidth: "md", slideSize: "50%" },
            ]}
          >
            {testimonialData.map((testimonial, index) => (
              <Carousel.Slide key={index}>
                <SingleTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
