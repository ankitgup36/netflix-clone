import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import styles from "./MembershipForm.module.css";

const MembershipForm = () => {
  return (
    <Container className={styles.con_dis}>
      <Row>
        <Col md={12} sm={12}>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={7} sm={9} className={styles.form_col}>
          <Form className={styles.form_size}>
            <Form.Group>
              <FloatingLabel
                label="Email Address"
                controlId="floatingInput"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="bg-transparent"
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Col>
        <Col md={5} sm={3} className={styles.btn_col}>
          <Button variant="danger" className={`${styles.button_danger}`}>
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MembershipForm;
