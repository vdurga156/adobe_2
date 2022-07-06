import React from 'react'
import Tests from './Tests'
import "../style/Navbar.css"
import search from '../images/search.jpg'
import user from '../images/user.jpg'
import shop from '../images/shopping-bag.jpg'
import adobe from '../images/adobe-wallpaper.jpg'

export default function Navbar() {
  return (
    <div>
      <div class="container">
        <div class="Nav">
        <div class="aem-Grid aem-Grid--12">
<div class="aem-GridColumn aem-GridColumn--default--3">
  <div class="logo">
   <h2> VENIA</h2>
  </div>
</div>
<div class="aem-GridColumn aem-GridColumn--default--6">
  <div class="product-list">
   <ul>
    <li><a href="#"></a><h5>Women</h5></li>
    <li><a href="#"></a><h5>Men</h5></li>
    <li><a href="#"></a><h5>Smart Gear</h5></li>
    <li><a href="#"></a><h5>Accesories</h5></li>
   </ul>
  </div>
</div>
<div class="aem-GridColumn aem-GridColumn--default--3">
  <div class="menu">
    <img src={search} class="search-1"/>
    <h2>Search</h2>
    <img src={user} class="user-1"/>
    <h2>Sign in</h2>
    <img src={shop} class="shopping-bag"/>

  </div>
</div>


        </div>


      </div>
      <div class="landing">
      <div class="aem-Grid aem-Grid--12">
<div class="aem-GridColumn aem-GridColumn--default--4">
  <div class="landing-left">
<h2>Women</h2>
<hr class="horizantal"/>
  </div>
</div>
<div class="aem-GridColumn aem-GridColumn--default--8">
  <div class="landing-right">
    <img src={adobe}alt="image" class="wallpaper"></img>
  </div>
</div>
        
      </div>
      </div>
<Tests/>
       </div>
       
       </div>
      
       
  )
}

