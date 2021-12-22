import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import artists1 from '../img/artistsBiden2.png';
import webstore1 from '../img/bidenwebstore1.png';
import webstore2 from '../img/bidenwebstore2.png';
import webstore3 from '../img/bidenwebstore3.png';
import pos1 from '../img/barcodeScanning1.png';
import pos2 from '../img/barcodeScanning2.png';
import customImage1 from '../img/customImage1.png';
import customImage2 from '../img/customImage2.png';
import customImage3 from '../img/customImage3.png';



class Skills extends Component {
 
    render() {
        return (
        

            <div className="condiv skills">

            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
            <h1 className="subtopic">My Projects</h1>
            </Animated>

                <CardGroup>
                    {/* Card 1 */}
                    <Card>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>

                    <Card.Body>
                    <Card.Title>Biden Presidential Webstore</Card.Title>
                    <Card.Text>
                        Developed and styled the Biden 2020 presidential campaign webstore.  Worked with designers from the Biden campaign to make stylistic edits to the webstore periodically throughout the campaign. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                {/* Card 2 */}
                <Card>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={artists1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={artists1}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={artists1}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                    <Card.Body>
                    <Card.Title>Artists for Biden</Card.Title>
                    <Card.Text>
                       Worked with the David Zwirner Art Gallery team to build an online store to auction art as a fundraiser for the Biden presidential campaign.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                {/* Card 3*/}
                <Card>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pos1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pos2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pos2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>

                    <Card.Body>
                    <Card.Title>Barcode Scanning Project</Card.Title>
                    <Card.Text>
                        Set up a point-of-sale (POS) system using BigCommerce's platform for Bumperactive's brick and mortar retail store.  Within the POS, I developed a barcode scanning feature to allow cashiers to scan items and have them added to cart.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                
            </CardGroup>


            <CardGroup>
  {/* Card 4 */}
                        <Card id="card4" style={{ width: '1rem' }}>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={customImage1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={customImage2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={customImage3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>

                    <Card.Body>
                    <Card.Title>Custom Sticker Ordering App</Card.Title>
                    <Card.Text>
                        Developed several custom products on a BigCommerce webstore to allow customers to place custom sticker orders with my company.  
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                  {/* Card 5 */}
                  {/* <Card>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>

                    <Card.Body>
                    <Card.Title>Biden Presidential Webstore</Card.Title>
                    <Card.Text>
                        Developed and styled the Biden 2020 presidential campaign webstore.  Worked with designers from the Biden campaign to make stylistic edits to the webstore periodically throughout the campaign. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card> */}

                  {/* Card 6 */}
                  {/* <Card>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={webstore3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>

                    <Card.Body>
                    <Card.Title>Biden Presidential Webstore</Card.Title>
                    <Card.Text>
                        Developed and styled the Biden 2020 presidential campaign webstore.  Worked with designers from the Biden campaign to make stylistic edits to the webstore periodically throughout the campaign. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card> */}


            </CardGroup>

            <p class="otherProjects"> Various other projects I have taken on: Moved an e-commerce app to my company's internal server</p>
           
            </div>

            )
        }
    }
    
    export default Skills