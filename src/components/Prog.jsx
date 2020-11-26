import React from "react";
import {ProgressBar} from "react-bootstrap";

export const Prog = () => {
    const now = 60;
    return  (
        <div className="App">
            <ProgressBar variant="warning" now={now} label={`${now}%`} />;
            <ProgressBar variant="success" now={40} />
  <ProgressBar striped variant="info" now={20} />
  <ProgressBar variant="danger" animated now={80} />
  <br/><br/><br/>
        </div>

    );
};