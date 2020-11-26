import React from "react";
import  {Tabs ,Tab ,Nav ,Row ,Col} from "react-bootstrap";

export const TabExm = () => {
    return (
        <div className="App">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  Say that thou didst forsake me for some fault, And I will comment upon that offence: Speak of my lameness, and I straight will halt, Against thy reasons making no defence. Thou canst not love disgrace me half so ill, To set a form upon desired change, As I'll myself disgrace; knowing thy will, I will acquaintance strangle, and look strange; Be absent from thy walks; and in my tongue Thy sweet beloved name no more shall dwell,

  </Tab>
  <Tab eventKey="profile" title="Profile">
    <p> Name : <strong>Aamer Sohel</strong> <br/> 
   Company : MicroSoft <br/>
   Mail : aamersohelansari@gmail.com <br/>
   designation : UI Developer</p></Tab>
  <Tab eventKey="contact" title="Contact">
   <p> Copyright @ <strong>Ammu Creation</strong>  <br/>
   Contact : 820855****
   </p>

  </Tab>
</Tabs>
<br/><br/><br/>

{/*-------------------Conatiner Tab----------------------------- */}

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link  eventKey="first">To Read</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">To See Content</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        I never saw that you did painting need, And therefore to your fair no painting set; I found, or thought I found, you did exceed That barren tender of a poet's debt: And therefore have I slept in your report, That you yourself, being extant, well might show How far a modern quill doth come too short, Speaking of worth, what worth in you doth grow. This silence for my sin you did impute, Which shall be most my glory being dumb;
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <ul> <strong>
        HTML <br/>
        CSS <br/>
        Bootstrap <br/>
        JavaScript <br/>
        JQuery <br/>
        React JS <br/>
        </strong>
    </ul>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
<br/><br/><br/>
        </div>
    )
}