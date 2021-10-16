import { useContext } from "react";
import { Navbar } from "react-bootstrap";
import AppContext from "../../store/AppContext";
const Nav = () => {
    const { user } = useContext(AppContext);
    return (
        <nav>
            <Navbar bg={'light'}>
                <Navbar.Brand to={'/'}>{user && user.name? `HI ${user.name}!`:"Affirmations"}</Navbar.Brand>
            </Navbar>
        </nav>
    );
};

export default Nav;