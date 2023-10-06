import Header from "../components/header";
import Footer from "../components/footer";
import { Container,Form,FormGroup,Label,Input,Button, Alert } from "reactstrap";
import { NavLink } from "react-router-dom";

function Login()
{
    return (
        <>
        <Header/>
        <Container className="vi-tri-dang-nhap">
                    <Alert>
                        ĐĂNG NHẬP: Nhập tài khoản mật khẩu của bạn
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
                <Button>
                    Đăng nhập
                </Button>
            </Form>
            <Button color="danger">
                Quên mật khẩu
            </Button>
        </Container>
        <Footer/>
        </>
    );
}
export default Login;