import react from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  p-3 border-bottom">
      <div class="container-fluid">
        <img src="media/images/logo.svg" alt="logo" style={{width:"10%"}}></img>
          <form class="d-flex " role="search">
          
             <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-2">
            <li class="nav-item mx-3">
              <a class="nav-link active " aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">
               Products
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">
                Support
              </a>
            </li>
           
          
          </ul>
          </form>
       
      </div>
    </nav>
  );
}
