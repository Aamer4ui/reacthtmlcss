import React from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { green } from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors'
import HomeIcon from "@material-ui/icons/Home"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import BusinessIcon from '@material-ui/icons/Business';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

export const FormTab = () => {
    return (
        <div className="App">
            <Form>
               <Form.Group controlId="formBasicEmail">
                     <Form.Label > <EmailOutlinedIcon color="secondary"></EmailOutlinedIcon> <b>Email address</b> </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">Don't Worry Your <strong>Email</strong> not Share with anyone.</Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                    <Form.Label> <VisibilityOutlinedIcon></VisibilityOutlinedIcon> <b>Password</b> </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check Out" />
               </Form.Group>
               <Button variant="dark" type="submit">Login</Button>
            </Form> <br/><br/> <br/>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt dolores vero neque in delectus expedita perferendis veritatis, vitae minus nostrum sit amet ut alias, blanditiis iste. Harum perspiciatis accusantium quisquam aliquam quod inventore dolorum quaerat aperiam, tempore natus. Dolores ea illo, maxime obcaecati qui sapiente! Accusamus optio reprehenderit iste!</h2> <br/><br/>
            {/*-----------------------Login Image-------------------------------- */}

            <Image src="Assets/per.jpg"  roundedCircle alt="img" className="img-position"/>

            {/*---------------------controlling Form---------------- */}
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label> <b>Email Add</b> </Form.Label>
                        <Form.Control type="email" placeholder="email" />
                </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label> <b>Select Course</b> </Form.Label>
                           <Form.Control as="select">
                                <option>HTML</option>
                                <option>CSS</option>
                                <option>BootStrap</option>
                                <option>JavaCript</option>
                                <option>JQuery</option>
                           </Form.Control>
                    </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                         <Form.Label> <b>Select Multiple Courses</b> </Form.Label>
                            <Form.Control as="select" multiple>
                                <option>HTML</option>
                                <option>CSS</option>
                                <option>BootStrap</option>
                                <option>JavaCript</option>
                                <option>JQuery</option>
                           </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> <b>Read About Course</b> </Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="We have designed the UI UX courses in a comprehensive manner that allows deep interaction between the faculty members and students. The course is a healthy mix of theoretical courseware and practical lessons. The faculty members are experienced and are committed to getting the best results out of the participants." readOnly />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Term's & Condition" />
               </Form.Group>
                <Button variant="info" type="submit">Login</Button>
                <br/><br/>
            </Form> <br/>
            <p>------------------------------------------------------------------------------------------------</p><br/><br/>


            {/*-------------------------------Grid Form Layout-------------------------------- */}

            <Image src="Assets/group.jpg"  roundedCircle alt="img" className="img-position"/> <br/> <br/>

            <HomeIcon color="primary" fontSize="large" />


            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> <EmailRoundedIcon color="secondary"></EmailRoundedIcon> <b>Email</b> </Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label> <VisibilityIcon></VisibilityIcon> <b>Password</b> </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label> <ContactsIcon color="primary"></ContactsIcon> <b>Contact</b> </Form.Label>
                        <Form.Control placeholder="Mobile No." />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label> <BusinessIcon></BusinessIcon> <b>Land Mark</b> </Form.Label>
                        <Form.Control placeholder="Apartment etc." />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label> <b>City</b> </Form.Label>
                            <Form.Control />
                        </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label> <b>State</b> </Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose... </option>
                                    <option>Maharashtra</option>
                                    <option>Telangana</option>
                                    <option>Karnataka</option>
                                    <option>Uttar Pardesh</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label> <b>Country</b> </Form.Label>
                                <Form.Control />
                            </Form.Group>
                    </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check Me" />
                            </Form.Group>
                            <Button variant="success" type="submit">Submit <DoubleArrowIcon></DoubleArrowIcon></Button> <br/> <br/>
                            <h5>Contact Us</h5>
                            <InstagramIcon color="secondary"></InstagramIcon>{' '}
                            <FacebookIcon color="primary"></FacebookIcon>{' '}
                            <WhatsAppIcon style={{ color: green[500] }}></WhatsAppIcon>{' '}
                            <TwitterIcon style={{ color: blue[500] }} ></TwitterIcon> {' '}
                            <YouTubeIcon color="secondary"></YouTubeIcon>
                            <TelegramIcon color="primary"></TelegramIcon> <br/> <br/>
            </Form>
            <br/><br/>



        </div>
    );
};