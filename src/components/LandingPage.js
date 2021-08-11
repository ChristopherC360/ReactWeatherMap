import React from "react";
import { Container, Row, Col, Card, CardImgOverlay, CardImg } from "reactstrap";
import titleImg from "../images/different-weather.jpg";

const LandingPage = (props) => {
    return (
        <Container className="landingPageContainer">
            <Row>
                <Col sm="12">
                    <Card>
                        <CardImg style={{ border: "3px solid"}} src={titleImg} alt="Weather"></CardImg>
                        <CardImgOverlay className="landingPageInput">{props.searchBar()}</CardImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;