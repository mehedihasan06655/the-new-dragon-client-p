import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import RightNav from "../Shared/RightNav/RightNav";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav/>
                    </Col>
                    <Col lg={6}>
                        <Outlet/>
                    </Col>
                    <Col lg={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;