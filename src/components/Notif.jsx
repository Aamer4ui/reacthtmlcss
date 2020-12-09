import React, {useState} from "react";
import {Button ,Modal } from "react-bootstrap";

export const Notif = () => {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
        <div className="App">
            <Button variant="primary" onClick={()=>setShow(true)}>
        Launch Modal
      </Button>

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <br/><br/><br/>

      {/*------------------------------------------Large Modal------------------------ */}


      <Button variant="danger" onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Button
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>“Why are you all buttoned up like that?" Cameron ran his gaze down the blackberry-shaped buttons of her bodice.[...] "You were happy to bare all last night," Cameron said. He let his mallet handler hover an inch from her chest. "Your bodice was down here."</Modal.Body>
      </Modal>
      <br/> <br/> <br/>
      <h2><strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet itaque nulla saepe illo, quos neque atque. Cumque provident error soluta!</strong></h2>

        </div>
    );
};