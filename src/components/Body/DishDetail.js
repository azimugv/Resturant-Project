import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }} >
                <CardImg top alt={props.dish.name}
                    src={props.dish.image}
                    style={{ opacity: "0.5" }} />

                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}</p>

                    </CardText>
                </CardBody>



            </Card>
        </div>
    )
}

export default DishDetail;