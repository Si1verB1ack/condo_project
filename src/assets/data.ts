// Import images
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

// Define TypeScript Interfaces
export interface Project {
  title: string;
  price: string;
  location: string;
  image: string;
}

export interface Testimonial {
  name: string;
  title: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
}

// Projects Data
export const projectsData: Project[] = [
  {
    title: "Skyline Suite",
    price: "$250/night",
    location: "Ocean View",
    image: project_img_1,
  },
  {
    title: "Vista View",
    price: "$230/night",
    location: "Mountain Side",
    image: project_img_2,
  },
  {
    title: "Serenity Room",
    price: "$220/night",
    location: "Garden View",
    image: project_img_3,
  },
  {
    title: "Central Room",
    price: "$200/night",
    location: "City Center",
    image: project_img_4,
  },
  {
    title: "Ocean Breeze",
    price: "$250/night",
    location: "Beachfront",
    image: project_img_5,
  },
  {
    title: "Skyline Deluxe",
    price: "$300/night",
    location: "Skyline View",
    image: project_img_6,
  },
];

// Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    name: "Donald Jackman",
    title: "Business Traveler",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "The stay was exceptional! The room had everything I needed, and the service was top-notch. I could focus on my work in a peaceful and comfortable environment.",
  },
  {
    name: "Richard Nelson",
    title: "Vacationer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "An amazing experience overall! The room was beautiful with an amazing view, and the staff were friendly. The only downside was the breakfast options could be improved.",
  },
  {
    name: "James Washington",
    title: "Family Guest",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "Our family had an incredible stay. The room was spacious, the view was breathtaking, and we loved the amenities. Highly recommend for a family getaway!",
  },
];

export const assets = {
  left_arrow,
  right_arrow,
};
