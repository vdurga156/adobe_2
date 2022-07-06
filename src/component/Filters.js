import React from 'react'
import '../style/Filt.css'
import Products from '../component/Products'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
function Filters() {
  return (
    <>
      <Navbar />
<div class="container">
      <div class="filter-1">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--2">
            <div class="filter-left">
              <p>attribute</p>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
              <label for="vehicle3"> option</label><br /><br /><br />
              <hr />
            </div>
            <div class="filter-left">
              <p>attribute</p>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
              <label for="vehicle3"> option</label><br /><br /><br />
              <hr />
            </div>
            <div class="color">
              <div class="square-1"></div>
              <div class="square-2"></div>
              <div class="square-3"></div>
              <div class="square-4"></div>
            </div>
            <br />
            <div class="color">
              <div class="square-5"></div>
              <div class="square-6"></div>
              <div class="square-7"></div>
              <div class="square-8"></div>
            </div>
            <br />
            <div class="color">
              <div class="square-9"></div>
              <div class="square-10"></div>

            </div>
            <hr />
            <br />

            <div class="filter-left">
              <p>attribute</p>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> option</label><br />
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
              <label for="vehicle3"> option</label><br /><br /><br />
              <hr />
            </div>

            <br />

          </div>
          <div class="aem-GridColumn aem-GridColumn--default--10">
            <div class="filter-right">
              <Products />
            </div>
          </div>

        </div>
      </div>
</div>
      <Footer />
    </>
  )
}

export default Filters