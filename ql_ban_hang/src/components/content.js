import Cards from "./card";
import { Container } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
function Content(props) {
    const dsSanPham = props.data.dsSanPham.map(function(item){
        return(
            <Col className="bg-light border" xs="auto">
            <Cards data={item} />
            </Col>  
        );
    })
    return (
        <>
            <span class="type-product">{props.data.ten}</span>
            <div class="button-all-of-type" >
                <button class="btn btn-dark ">
                <NavLink to="/products-type" className="btn-buy">Xem tất cả</NavLink>
                </button>
            </div>
            <Container>
                <Row>
                    {dsSanPham}
                </Row>
            </Container>
        </>
    )
}
export default Content