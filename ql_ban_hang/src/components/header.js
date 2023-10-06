import { NavLink } from "react-router-dom";





function Header() {
  return (
    <>
        <header class="p-3 bg-info text-dark "  >
            <div class="container">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                  My Brand
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
                  <li><a href="#" class="nav-link px-2 text-dark">Features</a></li>
                  <li><a href="#" class="nav-link px-2 text-dark">Pricing</a></li>
                  <li><NavLink to="/profile" className="nav-link px-2 text-dark">Tài khoản</NavLink></li>
                  <li><NavLink to="/cart" className="nav-link px-2 text-dark">Giỏ hàng</NavLink></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                  <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                </form>

                <div class="text-end">
                  <button type="button" class="btn btn-danger">
                  <NavLink to="/login" className="nav-link px-2 text-dark">Login</NavLink>
                  </button>
                  <button type="button" class="btn btn-warning">
                  <NavLink to="/register" className="nav-link px-2">Sign-up</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </header>
          
    </>
  );
}

export default Header;