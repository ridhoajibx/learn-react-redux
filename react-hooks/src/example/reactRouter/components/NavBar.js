import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import auth from '../auth';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';

const NavBar = (props) => {
    // const history = useHistory();
    // useEffect(() => {
    //     setTimeout(() => {
    //         history.push('/about')
    //     }, 2000);
    // }, [history])
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const authHandler = () => {
        if (auth.isAuthenticated()) {
            auth.logout(()=> {
                props.history.push('/')
            })
        } else {
            auth.login(()=> {
                props.history.push('/about')
            })
        }
    }
    const authText = auth.isAuthenticated() ? 'Logout' : 'Login'
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <Button size='sm' color='primary' onClick={authHandler}>{ authText }</Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default withRouter(NavBar);
