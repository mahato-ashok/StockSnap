import react from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  p-3 border-bottom">
      <div class="container-fluid">
        <img src="media/images/logo.svg" alt="logo" style={{width:"10%"}} ></img>
          <form class="d-flex " role="search">
          
             <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-2">
            <li class="nav-item mx-3">
              <Link class="nav-link active " aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to="/products">
               Products
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
           
          
          </ul>
          </form>
       
      </div>
    </nav>
  );
}
