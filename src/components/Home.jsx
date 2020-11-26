import React from "react";
import {ButtonCustom} from "./ButtonCustom";
import {NavComp} from "./NavComp";
import {Notif} from "./Notif";
import {ClickEv} from "./ClickEv";
import {AlrtShow} from "./AlrtShow";
import {TabExm} from "./TabExm";
import {Prog} from "./Prog";
import {TableCont} from "./TableCont";
import {Image} from "react-bootstrap";
import"./Home.css"


export const Home = () => {
  return (
    <div className="App">
       <Image src="Assets/img.jpg"  roundedCircle alt="img" className="img-position"/>

    <ButtonCustom/>
    <NavComp/>
    <Notif/>
    <ClickEv/>
    <AlrtShow/>
    <TabExm/>
    <Prog/>
    <TableCont/>
   
    </div>
  );
};
