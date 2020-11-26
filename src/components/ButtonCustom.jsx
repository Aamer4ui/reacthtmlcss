import React from "react";
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';

export const ButtonCustom = () => {
  return (
    <div className="App">
        <Button variant="warning">Warring</Button> {' '}
        <Button variant="outline-success">Success</Button> {' '}
        <Button as="input" type="button" value="Input" />{' '}
        <Button variant="secondary" size="lg">
      Large button
    </Button>{' '} <br/> <br/>
    <Button variant="danger" size="lg" block>
    Block level
  </Button> <br/> <br/>
  
  {/* --------------------Button Groups------------------------------*/}
  <Button variant="outline-primary">
      <Button variant="dark">1</Button>{' '}
      <Button variant="dark">2</Button>{' '}
      <Button variant="dark">3</Button>{' '}
      <Button variant="dark">4</Button>
    </Button> <br/> <br/>

    <Button variant="success">Left</Button>{' '}
  <Button variant="warning">Middle</Button>{' '}
  <Button variant="success">Right</Button> <br/> <br/>

  {/* -----------------------------ButtonGroup Dropdown------------------- */}

  <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Set Data</Dropdown.Item>
    <Dropdown.Item eventKey="2">Collect Data</Dropdown.Item> 
  </DropdownButton>{' '}<br/> <br/>

  {/* ------------------------Button's With Pill--------------------------- */}
  <Badge pill variant="primary">
    Primary
  </Badge>{' '}
  <Badge pill variant="secondary">
    Secondary
  </Badge>{' '}
  <Badge pill variant="success">
    Success
  </Badge>{' '}
  <Badge pill variant="danger">
    Danger
  </Badge>{' '}
  <Badge pill variant="warning">
    Warning
  </Badge>{' '}
  <Badge pill variant="info">
    Info
  </Badge>{' '}
  <Badge pill variant="light">
    Light
  </Badge>{' '}
  <Badge pill variant="dark">
    Dark
  </Badge> <br/> <br/>

    </div>
    );
};