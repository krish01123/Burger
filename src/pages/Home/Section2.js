import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../Assets/about/pizza.png";
import Salad from "../../Assets/about/salad.png";
import Delivery from "../../Assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Cheesy Pizza",
    paragraph: "House patty, cheddar cheese, tomato relish, avocado, lettuce, red onion",
  },
  {
    image: Salad,
    title: "Fresh Salad",
    paragraph: "Protein, Crunch, Cheese, Fruits ",
  },
  {
    image: Delivery,
    title: "Dhoom Dhoom Delivery",
    paragraph: "Dhoom dhoom — Garo chaina, khana aayo soon!",
  },
];

const Section2 = () => {
  return (
    <>
     <section className="about_section">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className="text-center">
                <h2>The burger tastes better when you eat it with your family.</h2>
                <p>
                    We are a family-owned burger restaurant dedicated to serving delicious, 
                    handcrafted burgers made with the freshest ingredients.
                    Our passion for quality and flavor shines through in every bite,
                     creating a memorable dining experience for our customers.
                </p>
                <Link to="/" className="btn order_now btn_red">
                  Explore Full Menu
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
        <Container>
            <Row className="justify-content-md-center">{mockData.map((cardData, index) => (
                <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}> 
                    <div className="about_box text-center">
                        <div className="about_icon">
                            <img src={cardData.image} className="img-fluid" alt="icon"/>
                        </div>
                        <h4>{cardData.title}</h4>
                        <p>{cardData.paragraph}</p>
                    </div>
                </Col>
            ))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section2;



