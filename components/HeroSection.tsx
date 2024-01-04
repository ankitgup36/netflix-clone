"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../assets/netflixx.svg";
import Select, { StylesConfig } from "react-select";
import CustomSelect from "./UI/Select";
import MembershipForm from "./UI/MembershipForm";

const customStyles: StylesConfig = {
  option: (provided) => ({
    ...provided,
    padding: "5px 10px",
    background: "none",
    color: "white",
    maxWidth: "auto",
    cursor: "pointer",
    textAlign: "center",

    ":active": {
      background: "none",
    },
  }),
  input: (provided) => ({
    ...provided,
    background: "none",
  }),
  control: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    border: "1px solid white",
    color: "white",
    background: "none",
    maxHeight: "auto",
    minWidth: "10rem",
    position: "relative",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    textAlign: "center",
    paddingInline: "5px",
  }),
  menu: (provided) => ({
    ...provided,
    color: "gray",
    backgroundColor: "transparent",
    border: "none",
    maxWidth: "100%",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
    textAlign: "center",
    paddingInline: "5px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provider) => ({
    ...provider,
    color: "white !important",
  }),
};

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Row className={styles.row_padding}>
          <Col md={9} sm={2}>
            <Image
              width={150}
              height={150}
              alt="Logo"
              src={img}
              className={styles.logo}
            />
          </Col>
          <Col md={3} sm={6} className={styles.left_items}>
            <CustomSelect />
            <Button variant="danger" className={styles.button_danger}>
              Sign in
            </Button>
          </Col>
        </Row>
        <Row className={styles.hero_text_container}>
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <MembershipForm />
        </Row>
      </Container>
    </div>
  );
};
export default HeroSection;
