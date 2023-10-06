import { Col, Input, Row,Button } from "reactstrap";
function ProductInCart()
{
    return(
        <>
            <tr>
                <th scope="row">
                    <Input type="checkbox" />
                </th>
                <td>
                    <Row>
                        <Col xs="auto">
                             <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            />
                        </Col>
                        <Col>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </Col>
                    </Row>
                </td>
                <td>
                        8.999.000
                </td>
                <td>
                    <Input type="number">1</Input><br/>
                    <Button>Xóa</Button>
                </td>
                <td>
                    45.565.522
                </td>
             </tr>
        </>
    );

}
export default ProductInCart;