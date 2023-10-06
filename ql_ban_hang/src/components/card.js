import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.data.ten}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {props.data.gia}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button >
          <NavLink to="/detail" className="btn-buy">Mua hàng</NavLink>
          </Button>
         
        </CardBody>
      </Card>
    </>
  )
}
export default Cards;
