import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae iste magni ipsam natus laborum quisquam laboriosam accusamus, ab recusandae eligendi! Aspernatur molestias ipsum magni dolor porro rem aliquam nesciunt?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;