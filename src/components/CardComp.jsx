import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Spinner} from "react-bootstrap"

export const CardComp = () => {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src="Assets/card.jpg" />
                <Card.Body>
                    <Card.Title>UAE Hotel</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque ipsum culpa omnis eligendi officia ipsa nihil nesciunt libero corrupti.
                    </Card.Text>
                    <Button variant="info">Click To See</Button>
                </Card.Body>
            </Card> <br/><br/>

            {/*--------------------------Spinner---------------------------- */}

            <Spinner animation="border" /> <br/><br/>
            <Spinner animation="grow" /> <br/><br/>
                <Button variant="dark" disabled>
                   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>Loading...
                </Button>
                <br/><br/><br/>
        </div>
    )
}