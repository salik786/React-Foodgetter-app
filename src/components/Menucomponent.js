/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

import Header from "./Headercomponent";
class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <Header />
        <div className="row text-center">
          <div
            className="col-12   text-white"
            style={{ backgroundColor: "#1A0301" }}
          >
            <h1 className="text-justify text-center">OUR SPECIALITY</h1>
          </div>
        </div>
        <div className="row">
          {this.props.dishes.map((dish, index) => {
            return (
              <Card
                className="col-xl-2 col-lg-2 col-md-4 col-sm-6 m-3 text-white"
                style={{ height: "400px", backgroundColor: "#1A0301" }}
              >
                <CardBody>
                  <CardTitle>{this.props.dishes[index].name}</CardTitle>

                  <CardSubtitle></CardSubtitle>
                </CardBody>

                <img
                  height="30%"
                  src={this.props.dishes[index].image}
                  alt={this.props.dishes[index].description}
                />

                <button className="bg-dark text-white mt-4 " width="100">
                  <CardText>
                    Serve for - {this.props.dishes[index].serving}
                  </CardText>
                </button>
                <CardBody>
                  <CardText>
                    <ul className="list-unstyled list-inline rating mb-0">
                      <li className="list-inline-item mr-0">
                        <i>
                          <BsStarFill style={{ color: "#FFDF00" }} />
                        </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i>
                          <BsStarFill style={{ color: "#FFDF00" }} />
                        </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i>
                          <BsStarFill style={{ color: "#FFDF00" }} />
                        </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i>
                          <BsStarFill style={{ color: "#FFDF00" }} />
                        </i>
                      </li>
                      <li className="list-inline-item">
                        <i>
                          <BsStarHalf style={{ color: "#FFDF00" }} />
                        </i>
                      </li>
                      <li className="list-inline-item">
                        <p className="">4.5 (413)</p>
                      </li>
                    </ul>
                  </CardText>
                  <CardSubtitle>
                    $$$ -{this.props.dishes[index].price}
                  </CardSubtitle>
                </CardBody>
                <button
                  className="text-white m-2 p-2 "
                  style={{ backgroundColor: "#FDA50F" }}
                >
                  Order Now
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Menu;
