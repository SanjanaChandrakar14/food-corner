import React from "react";
//import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
<footer class="page-footer font-small blue pt-4 footer-bg">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-center py-3">Your Food Corner</h5>
        <p>Order your Food on the Go ! ! !</p>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="/about">Sanjana Chandrakar</a>
  </div>

</footer>
    </>
  );
}

export default Footer;