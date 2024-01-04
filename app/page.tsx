import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import HeroSection from "@/components/HeroSection";
import TvSection from "@/components/TvSection";
import img from "../assets/tv_image.png";
import img2 from "../assets/mobile-0819.jpg";
import img3 from "../assets/final-rajma-chaval.png";
import img4 from "../assets/children.png";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TvSection
        heading={"Enjoy on your TV"}
        paragraph={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
        image={img}
      />
      <TvSection
        heading={"Download your shows to watch offline"}
        paragraph={
          "Save your favourites easily and always have something to watch."
        }
        image={img2}
        reverse
      />
      <TvSection
        heading={"Watch everywhere"}
        paragraph={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        image={img3}
      />
      <TvSection
        heading={"Create profiles for kids"}
        paragraph={
          "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        }
        image={img4}
        reverse
      />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}
