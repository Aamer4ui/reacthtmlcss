import React from "react";
import {ButtonCustom} from "./ButtonCustom";
import {NavComp} from "./NavComp";
import {Notif} from "./Notif";
import {ClickEv} from "./ClickEv";
import {AlrtShow} from "./AlrtShow";
import {TabExm} from "./TabExm";
import {Prog} from "./Prog";
import {TableCont} from "./TableCont";
import {ImageComponent} from "./ImageComponent";
import { FormTab } from "./FormTab";
import {CardComp} from "./CardComp";
import {CarousalPrac} from "./CarousalPrac";
import {IconExm} from "./IconExm";
import {Table} from "./Table"


export const Home = () => {
  return (
    <div className="App">
    <ButtonCustom/>
    <NavComp/>
    <Notif/>
    <ClickEv/>
    <AlrtShow/>
    <TabExm/>
    <Prog/>
    <TableCont/>
    <ImageComponent/>
    <FormTab/>
    <CardComp/>
    <CarousalPrac/>
    <IconExm/>
    <Table/>
    </div>
  );
};
