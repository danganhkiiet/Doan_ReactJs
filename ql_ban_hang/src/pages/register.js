import Header from "../components/header";
import Footer from "../components/footer";
import { Container,Form,FormGroup,Label,Input,Button, Alert } from "reactstrap";
import { NavLink } from "react-router-dom";

function Register()
{
    return (
        <>
        <Header/>
        <Container className="vi-tri-dang-nhap">
                    <Alert>
                        ĐĂNG KÝ: Nhập thông tin để tạo tài khoản của bạn
                    </Alert>
            <Form>
                <FormGroup>
                    <Label
                    for="exampleEmail"
                    hidden
                    >
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                    for="examplePassword"
                    hidden
                    >
                    Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                    for="examplePassword"
                    hidden
                    >
                    Xác thực mật khẩu
                    </Label>
                    <Input
                    id="exampleRe-Password"
                    name="password"
                    placeholder="Re-Password"
                    type="password"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                    for="examplePassword"
                    hidden
                    >
                    Địa chỉ
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Địa chỉ"
                    type="password"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                    for="examplePassword"
                    hidden
                    >
                    Số điện thoại
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Số điện thoại"
                    type="password"
                    />
                </FormGroup>
                {' '}
                <Button>
                    Đăng ký
                </Button>
            </Form>
        </Container>
        <Footer/>
        </>
    );
}
export default Register;