import { Col, Container, Row,Toast,ToastHeader,ToastBody,Input, Button, Alert } from "reactstrap";


function BodyDetail()
{
    return (
        <>
        <Container className="body-detail">
            <Row>
                <Col xs="3">
                <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                />
                </Col>
                <Col xs="7">
                    <div className="name-product">
                        Name of product
                    </div>
                <div className="p-3 bg-warning my-2 ">
                    <Toast>
                    <ToastHeader>
                        Giá sốc
                    </ToastHeader>
                    <ToastBody>
                        15.606.544
                    </ToastBody>
                    </Toast>
                </div>
                <div className="so-luong">
                    <Row>
                        <Col xs="2">
                        Số lượng:
                        </Col>
                        <Col xs="2">
                        <Input type="number" ></Input>
                        </Col>
                    </Row>
                </div>
                <div>
                <Button color="info">
                    Thêm vào giỏ hàng
                </Button>
                <Button color="warning">
                    Mua ngay
                </Button>
                </div>
                </Col>
            </Row>
            <Alert color="dark">
                Thông tin sản phẩm
            </Alert>
            <div>
            Dell XPS 13 9310 là một chiếc laptop cao cấp với thiết kế sang trọng và hiện đại. Máy có kích thước nhỏ gọn với màn hình 13,4 inch, trọng lượng chỉ 1,27 kg, giúp người dùng dễ dàng mang theo khi di chuyển.

            Mặt lưng máy được làm bằng hợp kim nhôm nguyên khối, với các cạnh được bo tròn mềm mại. Mặt trước máy được phủ một lớp kính cường lực Gorilla Glass 6, giúp bảo vệ màn hình khỏi trầy xước và va đập.

            Màn hình của Dell XPS 13 9310 có độ phân giải Full HD+, sử dụng công nghệ IPS cho góc nhìn rộng và màu sắc sống động. Máy cũng được trang bị cảm biến vân tay tích hợp vào nút nguồn, giúp người dùng mở khóa máy nhanh chóng và tiện lợi.

            Bên trong máy là bộ vi xử lý Intel Core i5 thế hệ 12, kết hợp với 8GB RAM và 512GB SSD, mang lại hiệu năng mạnh mẽ cho các tác vụ văn phòng, giải trí và học tập. Máy cũng được trang bị card đồ họa Intel Iris Xe, cho phép người dùng chơi các game nhẹ nhàng.

            Bàn phím của Dell XPS 13 9310 có hành trình phím sâu, cho cảm giác gõ thoải mái. Touchpad của máy cũng có kích thước lớn, hỗ trợ đa điểm, mang lại trải nghiệm sử dụng mượt mà.

            Dell XPS 13 9310 được trang bị viên pin 52 Wh, cho thời lượng sử dụng lên đến 10 giờ. Máy cũng hỗ trợ sạc nhanh, giúp người dùng sạc đầy pin trong thời gian ngắn.

            Nhìn chung, Dell XPS 13 9310 là một chiếc laptop cao cấp với thiết kế sang trọng, hiệu năng mạnh mẽ và thời lượng pin ấn tượng. Đây là một lựa chọn phù hợp cho những người dùng cần một chiếc laptop nhỏ gọn, linh hoạt và có khả năng xử lý tốt các tác vụ đa nhiệm.

            Dưới đây là một số thông số kỹ thuật của Dell XPS 13 9310:

            Màn hình: 13,4 inch, Full HD+ (1920 x 1200), IPS
            Bộ vi xử lý: Intel Core i5-1235U
            RAM: 8GB
            Ổ cứng: 512GB SSD
            Card đồ họa: Intel Iris Xe
            Pin: 52 Wh
            Trọng lượng: 1,27 kg
            Giá bán: khoảng 25 triệu đồng
            </div>
        </Container>
        </>
    );
}
export default BodyDetail;