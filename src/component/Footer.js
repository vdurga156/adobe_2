import React from 'react'
import "../style/Footer.css"
import facebook from '../images/facebook.jpg'
import instagram from '../images/instagram.jpg'
import twitter from '../images/twitter.jpg'

export default function Footer() {
  return (
    <div>
    <div class="container">
<div class="footer">
    <div class="aem-Grid aem-Grid--12">
    <div class="aem-GridColumn aem-GridColumn--default--3">
      <div class="footer_1">
<h1>Account</h1>
<p>Sign In</p>
<p>Register</p>
<p>Order Status</p>
      </div>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--3">
      <div class="footer_2">
        <h1>About Us</h1>
        <p>Our Story</p>
        <p>Careers</p>
      </div>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--3">
      <div class="footer_3">
        <h1> Help </h1>
        <p>Contact Us</p>
        <p>Order Status</p>
        <p>Returns</p>
      </div>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--3">
      <div class="footer_4">
        <h1>Follow Us!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
       <p>  adipiscing elit, sed do eiusmod tempor </p>
       <p>incididunt ut labore et dolore.</p>
      
<img src={instagram} className="instagram-1"/>
<img src={facebook} className="facebook-1"/>
<img src={twitter} className="twitter-1"/>

      
      </div>
    </div>
</div>
</div>
 <hr/> 
<div class="icons">
<div class="aem-Grid aem-Grid--12">
<div class="aem-GridColumn aem-GridColumn--default--4">
  <div class="icons_1">
  VENIA
  </div>
</div>
<div class="aem-GridColumn aem-GridColumn--default--4">
  <div class="icons_2">
<h3>© Company Name Address Ave, City Name, State ZIP</h3>
  </div>
</div>
<div class="aem-GridColumn aem-GridColumn--default--4">
  <div class="icons_3">
<a href="#">Terms of Use</a>
<a href="#">Privacy Policy</a>
  </div>
</div>

</div>

</div>
</div>
</div>

  )
}
