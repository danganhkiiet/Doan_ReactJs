import { Col, Input, Row,Button } from "reactstrap";
function ProductInProfile()
{
    return(
        <>
            <tr>
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
                    5
                </td>
                <td>
                    45.565.522
                </td>
             </tr>
        </>
    );

}
export default ProductInProfile;