import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../Assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Freshly grilled, packed with flavor, and made with care, every
                burger is designed to turn an ordinary meal into a shared
                experience. Whether you're catching up with friends or enjoying
                a family meal, it’s all about good food and great moments.
              </p>
              <ul>
                <li>
                  <p>
                    Freshly grilled burgers made with premium ingredients and
                    bold flavors.
                  </p>
                </li>
                <li>
                  <p>
                    Juicy patties, melted cheese, and fresh toppings in every
                    bite.
                  </p>
                </li>
                <li>
                  <p>
                    Made fresh to order using high-quality ingredients for the
                    best taste.
                  </p>
                </li>
                <li>
                  <p>
                    Perfect for sharing with friends, family, and unforgettable
                    moments.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
