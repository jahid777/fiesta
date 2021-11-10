import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allData } from "../../../AllData/AllData";

const Bag = () => {
  const [product, setProduct] = useState(allData);
  const [shoes, setShoes] = useState([]);
  const [belt, setBelts] = useState([]);
  const [wallet, setWallet] = useState([]);

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            {product.map((data) => (
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
