import React from "react";
import {Button ,Card ,Accordion} from "react-bootstrap";

export const ClickEv = () => {
    return (
        <div className="App">
            <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio ipsa, in voluptatum voluptate iste consectetur praesentium minima, tenetur eos perferendis iusto ex aut amet eius esse et! Quod, pariatur.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  <br/><br/>
  </div>
    );
};