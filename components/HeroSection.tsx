"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../assets/netflix_logo.png";
import Select, { StylesConfig } from "react-select";
import langIcon from "../assets/langIcon.png";

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
  const options = [
    { value: "english", label: "English", icon: langIcon },
    { value: "hindi", label: "हिन्दी", icon: langIcon },
  ];
  return (
    <div className={styles.hero}>
      <Container>
        <Row className={styles.row_padding}>
          <Col md={9} sm={2}>
            <Image
              width={150}
              height={40}
              alt="Logo"
              src={img}
              className={styles.logo}
            />
          </Col>
          <Col md={3} sm={6} className={styles.left_items}>
            <div className="position-relative">
              <Select options={options} styles={customStyles} />
              <Image
                src={langIcon}
                width={18}
                height={18}
                alt="Language"
                className={styles.icon_image}
              />
            </div>
            <Button variant="danger" className={styles.button_danger}>
              Sign in
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroSection;
