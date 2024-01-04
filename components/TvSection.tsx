import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./TvSection.module.css";

type TVType = {
  heading: String;
  paragraph: String;
  image: any;
  reverse?: Boolean;
};
const TvSection: React.FC<TVType> = ({
  heading,
  paragraph,
  image,
  reverse,
}) => {
  return (
    <div className={styles.hero}>
      <Container className={styles.container_mar}>
        <Row className={`${styles.row_flex} ${reverse && "flex-row-reverse"}`}>
          <Col md={6} sm={12} className={styles.hero_text_container}>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
          </Col>
          <Col md={6} sm={12} className={styles.col_ch}>
            <Image
              width={700}
              height={550}
              src={image}
              alt="television"
              className={styles.image_o}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TvSection;
