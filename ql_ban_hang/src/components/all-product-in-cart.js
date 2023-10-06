import { Table, Container,Alert,Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import ProductInCart from "./product-in-cart";

function AllProductInCart()
{
    return(
        <>
        <Container>
        <Alert color="info">
                Sản phẩm bạn đã thêm
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
                        
                    </th>
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
                    <ProductInCart/>
                </tbody>
            </Table>
            <Button
                    color="info"
                    className="btn-them-san-pham"
                >
                    <NavLink to="/" className="nav-link px-2 text-dark">Thêm sản phẩm</NavLink>
            </Button>
        </Container>
        </>
    );

}
export default AllProductInCart;