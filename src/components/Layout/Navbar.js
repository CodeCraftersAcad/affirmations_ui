import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <nav>
            <Navbar bg={'light'}>
                <Navbar.Brand to={'/'}>Affirmations</Navbar.Brand>
            </Navbar>
        </nav>
    );
};

export default Nav;