import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const linkStyle = (index) => ({
        color: hoverIndex === index ? '#96e3f1' : 'white',
        textDecoration: 'none',
        marginRight: '15px',
        marginLeft: '5em',
        fontWeight: 'bold'  
    });

    return (
        <>
            <Navbar style={{ backgroundColor: 'navy', color: '#fff' }} expand="lg" collapseOnSelect>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{ padding: '15px' }}>
                        <Nav.Link 
                            active 
                            style={linkStyle(0)} 
                            href="/login"
                            onMouseEnter={() => setHoverIndex(0)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            Admin
                        </Nav.Link>
                        <Nav.Link 
                            active 
                            style={linkStyle(1)} 
                            href="/tlogin"
                            onMouseEnter={() => setHoverIndex(1)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            Teacher
                        </Nav.Link>
                        <Nav.Link 
                            active 
                            style={linkStyle(2)} 
                            href="/slogin" 
                            className="mr-3"
                            onMouseEnter={() => setHoverIndex(2)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            Student
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
