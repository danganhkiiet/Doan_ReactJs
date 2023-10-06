
import { Navbar, NavbarBrand } from 'reactstrap';
function Footer() {
    return (
        <>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/" >
                    <img
                        alt="logo"
                        src="/logo192.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    My Brand
                </NavbarBrand>
            </Navbar>
        </>
    )
}
export default Footer