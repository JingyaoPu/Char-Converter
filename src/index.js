import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './CharConverter'
import * as serviceWorker from './serviceWorker';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const cal = (
 
    <html lang="en">
        <head>
            <script src="http://localhost:8097"></script>
        </head>
        <Container>
                <Row>
                    
                    <Col sm><Calculator/></Col>
                    <Col sm><Calculator/></Col>
                </Row>
                <br/>
                <Row>
                    <Col sm><Calculator/></Col>
                    <Col sm><Calculator/></Col>
                </Row>
        </Container>
    </html>
)

ReactDOM.render(cal, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
