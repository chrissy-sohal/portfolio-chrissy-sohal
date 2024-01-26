import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarFull } from "react-icons/im";


function FactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "center" }} className="fact-text">
            Fun Facts About Chrissy!
          </p> */}

          <ul>
            <li className="fact-activity">
              <ImStarFull /> Chrissy's favorite animal is the rhinoceros!
            </li>
            <li className="fact-activity">
              <ImStarFull /> Chrissy has been bitten by a lemur named Deeglan!
            </li>
            <li className="fact-activity">
              <ImStarFull /> Chrissy has a freckle on her left eyeball!
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default FactCard;