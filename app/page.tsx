import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}
