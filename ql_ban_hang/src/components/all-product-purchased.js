import { Table, Container,Alert,Button,Form,FormGroup,Col,Row,Label,Input, ButtonGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import ProductInProfile from "./product-in-profile";
function AllProDuctPur()
{
    return(
        <>
        <Container>
        <Alert>Thông tin giao hàng</Alert>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Họ tên
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">
                      Số điện thoại
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Địa chỉ
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">
                      Email
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <ButtonGroup>
                <Button>
                <NavLink to="/change-infor" className="nav-link px-2 text-dark">Thay đổi thông tin</NavLink>
                </Button>
            </ButtonGroup>
          </Container>
          <Container>
        <Alert color="info">
                Sản phẩm bạn đã mua
        </Alert>
        <Table
                bordered
                hover
                responsive
                size=""
                striped
                >
                <thead>
                    <tr>
                    <th>
                        Sản phẩm
                    </th>
                    <th>
                        Đơn giá
                    </th>
                    <th>
                        Số lượng
                    </th>
                    <th>
                        Thành tiền
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <ProductInProfile/>
                </tbody>
            </Table>
            </Container>
        </>
    );
}
export default AllProDuctPur;