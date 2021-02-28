import React from "react";
import "./footer.css"
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer(){
    return(
        <footer className="footer_sz">
            <Container>
            <div className="footer-col row">
                <div className="footer-col-50 col">
                    <span>Mykola Halushko</span>
                </div>
                <div className="footer-col-50 col">
                    <a href="https://www.linkedin.com/in/nhalushko/">
                        <i className="linked-logo"></i>
                    </a>
                </div>
            </div>
        </Container>
        </footer>
    )
}