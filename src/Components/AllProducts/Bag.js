import React from "react";
import { Link } from "react-router-dom";
import "./Bag.css";

const AllProducts = () => {
  return (
    <div className="container-fluid">
      <div class="m-4">
        <ul class="nav nav-tabs" id="myTab">
          <li class="nav-item">
            <Link to="#gym" class="nav-link active" data-bs-toggle="tab">
              Gym Bag
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#Office" class="nav-link" data-bs-toggle="tab">
              Office Bag
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#Ladies" class="nav-link" data-bs-toggle="tab">
              Ladies Bag
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#laptop" class="nav-link" data-bs-toggle="tab">
              laptop Bag
            </Link>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="gym">
            <h4 class="mt-2">Home tab content</h4>
            <p>
              Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
              american apparel, butcher voluptate nisi qui. Raw denim you
              probably haven't heard of them jean shorts Austin. Nesciunt tofu
              stumptown aliqua, retro synth master cleanse. Mustache cliche
              tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
              retro keffiyeh dreamcatcher synth.
            </p>
          </div>
          <div class="tab-pane fade" id="Office">
            <h4 class="mt-2">Profile tab content</h4>
            <p>
              Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
              Vivamus nibh urna, ornare id gravida ut, mollis a magna. Aliquam
              porttitor condimentum nisi, eu viverra ipsum porta ut. Nam
              hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean
              volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc
              facilisis leo at faucibus adipiscing.
            </p>
          </div>
          <div class="tab-pane fade" id="Ladies">
            <h4 class="mt-2">Messages tab content</h4>
            <p>
              Donec vel placerat quam, ut euismod risus. Sed a mi suscipit,
              elementum sem a, hendrerit velit. Donec at erat magna. Sed
              dignissim orci nec eleifend egestas. Donec eget mi consequat massa
              vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat
              ante. Fusce ut orci lorem. Donec molestie libero in tempus
              imperdiet. Cum sociis natoque penatibus et magnis.
            </p>
          </div>
          <div class="tab-pane fade" id="laptop">
            <h4 class="mt-2">Messages tab content</h4>
            <p>
              Donec vel placerat quam, ut euismod risus. Sed a mi suscipit,
              elementum sem a, hendrerit velit. Donec at erat magna. Sed
              dignissim orci nec eleifend egestas. Donec eget mi consequat massa
              vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat
              ante. Fusce ut orci lorem. Donec molestie libero in tempus
              imperdiet. Cum sociis natoque penatibus et magnis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
