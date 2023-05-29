import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../Q-Zone/QZone";
import bg from '../../../src/assets/bg.png'



const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className="mb-2" variant="outline-primary"><FaGoogle />  Login with google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with github</Button>
            </div>
            <div className="mt-4">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
                <QZone/>
                <div className="mt-4">
                    <img src={bg} alt="" />
                     
                </div>
            </div>
        </div>
    );
};

export default RightNav;